import { useState, useEffect } from "react";
import { ref, set } from "firebase/database";
import { database } from "../lib/firebase";

import { shuffleQuestions } from "@/src/lib/shuffleQuestions";
import questions from "../data/quizQuestions";

import { QuizQuestion } from "../types/types";

interface useInitQuestionsProps {
  roomId?: string;
  topics: Record<string, string>;
}

export function useInitQuestions({ roomId, topics }: useInitQuestionsProps) {
  const [topicsState, setTopicsState] = useState<QuizQuestion[] | undefined>();

  useEffect(() => {
    const maxQuestions = 20;
    const initQuestions = async () => {
      try {
        const quizQuestions = questions.filter((category) =>
          Object.keys(topics).includes(category.category)
        );

        const shuffleQuizQuestions = shuffleQuestions(quizQuestions).slice(
          0,
          maxQuestions
        );

        await set(
          ref(database, `rooms/${roomId}/questions`),
          shuffleQuizQuestions
        );

        setTopicsState(shuffleQuizQuestions);

        return shuffleQuizQuestions;
      } catch (error) {
        console.error(error);
      }
    };

    initQuestions();
  }, [roomId, topics]);

  return topicsState;
}
