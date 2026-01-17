import { useEffect } from "react";

import { quizMusic } from "@/src/lib/quizMusic";

export const useSoundMem = (
  memState: boolean,
  typeOfMem: "highScore" | "zeroScore" | "normal"
) => {
  useEffect(() => {
    const memHighScoreArray = [
      "/quiz-sound-mem/babka_skolko.m4a",
      "/quiz-sound-mem/john_siena.m4a",
      "/quiz-sound-mem/mozno_bylo.m4a",
      "/quiz-sound-mem/ostanovites.m4a",
      "/quiz-sound-mem/pahsa_tehnik.m4a",
      "/quiz-sound-mem/surprise_motherfucker.m4a",
      "/quiz-sound-mem/taktika_prederzivalsa.m4a",
      "/quiz-sound-mem/vot_eto_povorot.m4a",
    ];

    const memZeroScoreArray = [
      "/quiz-sound-mem/da_ladno.m4a",
      "/quiz-sound-mem/harkiv_mer.m4a",
      "/quiz-sound-mem/pacan_k_uspehu_shel.m4a",
      "/quiz-sound-mem/sovpadenie_ne_dumayu.m4a",
      "/quiz-sound-mem/vse_gavno.m4a",
      "/quiz-sound-mem/ispanec_hohotoon.m4a",
    ];

    const finishArray =
      typeOfMem === "highScore"
        ? memHighScoreArray
        : typeOfMem === "zeroScore"
        ? memZeroScoreArray
        : [];

    const randomMusicIndex = Math.floor(Math.random() * finishArray.length);

    const memSound = quizMusic(finishArray[randomMusicIndex], false, 1);

    if (
      (memState && typeOfMem === "highScore") ||
      (memState && typeOfMem === "zeroScore")
    ) {
      memSound.play();

      return () => {
        memSound.stop();
      };
    } else {
      memSound.stop();
    }
  }, [memState, typeOfMem]);
};
