import { QuizWords } from "../types/types";

export const getRandomLevelsWords = (allLevels: QuizWords[], count: number) => {
  const result: QuizWords[] = [];

  while (result.length < count) {
    const randomIndex = Math.floor(Math.random() * allLevels.length);

    result.push(allLevels[randomIndex]);
  }

  const splittedWords = result.map((word) => {
    return { ...word, letters: [...word.word.split("")].sort() };
  });

  return splittedWords;
};
