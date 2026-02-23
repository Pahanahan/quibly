import { QuizMusics } from "@/src/types/types";

export const shuffleMusics = (musics: QuizMusics[]) => {
  const shuffleArray = <T>(arr: T[]): void => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };

  for (const movie of musics) {
    shuffleArray(movie.answers);
  }

  shuffleArray(musics);

  return musics;
};
