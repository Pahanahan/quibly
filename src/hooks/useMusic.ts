import { useEffect } from "react";

import { quizMusic } from "@/src/lib/utils/quizMusic";

export const useMusic = (musicState: boolean) => {
  useEffect(() => {
    const musics = [
      "/quiz-sound/jazz_in_paris.mp3",
      "/quiz-sound/spring_in_my_step.mp3",
      "/quiz-sound/mr_turtle.mp3",
      "/quiz-sound/pink_lemonade.mp3",
    ];

    const randomMusicIndex = Math.floor(Math.random() * 4);

    const music = quizMusic(musics[randomMusicIndex], true, 0.5);

    if (musicState) {
      music.play();

      return () => {
        music.stop();
      };
    } else {
      music.stop();
    }
  }, [musicState]);
};
