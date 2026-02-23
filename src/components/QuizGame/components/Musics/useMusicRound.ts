import { useEffect } from "react";

import { quizMusic } from "@/src/lib/quizMusic";

export const useMusicRound = (src: string) => {
  useEffect(() => {
    const music = quizMusic(src, true, 1);

    if (src) {
      music.play();

      return () => {
        music.stop();
      };
    } else {
      music.stop();
    }
  }, [src]);
};
