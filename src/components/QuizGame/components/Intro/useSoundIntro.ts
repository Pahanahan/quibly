import { useEffect } from "react";

import { quizMusic } from "@/src/lib/quizMusic";
import { quizIntroJokes } from "@/src/data/quizIntroJokes";

import { GamePhase } from "@/src/types/types";

export const useSoundIntro = (gamePhase: GamePhase) => {
  const phase =
    gamePhase === GamePhase.QUESTION
      ? "question"
      : gamePhase === GamePhase.MOVIES
        ? "movies"
        : gamePhase === GamePhase.MUSICS
          ? "musics"
          : gamePhase === GamePhase.WORDS
            ? "words"
            : gamePhase === GamePhase.OBSTRUCTION
              ? "obstruction"
              : gamePhase === GamePhase.SORTING
                ? "sorting"
                : gamePhase === GamePhase.MEMORY
                  ? "memory"
                  : "final";

  useEffect(() => {
    const randomSoundIndex = Math.floor(
      Math.random() * quizIntroJokes[phase].length,
    );

    const sound = quizMusic(quizIntroJokes[phase][randomSoundIndex], false, 1);

    console.log(phase);

    if (phase === "final") {
      return () => {
        sound.stop();
      };
    } else {
      sound.play();
    }
  }, [gamePhase, phase]);
};
