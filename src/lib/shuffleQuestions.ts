import { QuizQuestion } from "../types/types";

export const shuffleQuestions = (questions: QuizQuestion[]) => {
  const shuffleArray = <T>(arr: T[]): void => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };

  for (const question of questions) {
    shuffleArray(question.answers);
  }

  shuffleArray(questions);

  return questions;
};
