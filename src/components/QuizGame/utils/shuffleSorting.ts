import { QuizSorting } from "@/src/types/types";

export const shuffleSorting = (questions: QuizSorting[]) => {
  const shuffleArray = <T>(arr: T[]): void => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };

  for (const question of questions) {
    shuffleArray(question.variables);
  }

  shuffleArray(questions);

  return questions;
};
