import { QuizQuestion } from "../types/types";

export const generateId = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTVUYWXZ0123456789";

  const id = [];

  for (let i = 0; i < 5; i++) {
    const uniqId = Math.floor(Math.random() * alphabet.length);
    id.push(alphabet[uniqId]);
  }

  return id.join("");
};

export const shuffleQuestions = (questions: QuizQuestion[]) => {
  const shuffleArray = <T>(arr: T[]): T[] => {
    const result = [...arr];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };

  return questions
    .map((q) => ({
      ...q,
      answers: shuffleArray(q.answers) as [string, string, string, string],
    }))
    .sort(() => Math.random() - 0.5);
};
