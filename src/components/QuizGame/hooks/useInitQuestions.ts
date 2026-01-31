import { useState, useEffect } from "react";

import { QuizQuestion } from "../../../types/types";

interface useInitQuestionsProps {
  roomId?: string;
  topics: Record<string, string>;
}

export function useInitQuestions({ roomId, topics }: useInitQuestionsProps) {
  const [quesitonState, setQuesitonState] = useState<QuizQuestion[] | null>(
    null,
  );

  useEffect(() => {
    const initQuestions = async () => {
      try {
        if (!roomId || !topics) return;

        const res = await fetch("api/room/init-questions", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ roomId }),
        });

        if (!res.ok) throw new Error("Faild to init questions");

        const data: QuizQuestion[] = await res.json();
        setQuesitonState(data);
        return data;
      } catch (error) {
        console.error(error);
      }
    };

    initQuestions();
  }, [roomId, topics]);

  return quesitonState;
}
