import { useEffect } from "react";

import { quizMusic } from "@/src/lib/quizMusic";

export const useMusic = (musicState: 'play' | 'stop' | 'pause') => {
  useEffect(() => {
    const musics = [
      "/quiz-sound/jazz_in_paris.mp3",
      "/quiz-sound/spring_in_my_step.mp3",
      "/quiz-sound/mr_turtle.mp3",
      "/quiz-sound/pink_lemonade.mp3",
    ];

    const randomMusicIndex = Math.floor(Math.random() * 4);

    const music = quizMusic(musics[randomMusicIndex], true, 0.2);

    if (musicState === 'play') {
      music.play();

      return () => {
        music.stop();
      };
    } 
    if (musicState === 'stop') {
      music.stop();
    } 
    if (musicState === 'pause'){
      music.pause();
    }
  }, [musicState]);
};
