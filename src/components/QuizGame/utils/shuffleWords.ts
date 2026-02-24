import { QuizWords } from "@/src/types/types";

export const shuffleWords = (words: QuizWords[]) => {
  const shuffleArray = <T>(arr: T[]): void => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };

  const splittedWords = words.map((word) => {
    return { ...word, letters: [...word.word.split("")].sort() };
  });

  shuffleArray(splittedWords);

  return splittedWords;
};
