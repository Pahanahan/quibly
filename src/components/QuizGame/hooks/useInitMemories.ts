import { useEffect } from "react";
import { ref, set } from "firebase/database";
import { database } from "../../../lib/firebase";

import { shuffleMemories } from "../utils/shuffleMemories";
import { quizMemories } from "../../../data/quizMemories";

import { QuizMemories } from "../../../types/types";

interface useInitMemoriesProps {
  roomId?: string;
}

export function useInitMemories({ roomId }: useInitMemoriesProps) {
  useEffect(() => {
    const initMemories = async () => {
      try {
        const shuffleQuizMemories: QuizMemories[] =
          shuffleMemories(quizMemories);

        const memoryGame = {
          items: shuffleQuizMemories,
        };

        await set(ref(database, `rooms/${roomId}/memoryGame`), memoryGame);

        return memoryGame;
      } catch (error) {
        console.error(error);
      }
    };

    if (!roomId) return;

    initMemories();
  }, [roomId]);
}
