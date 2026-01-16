import { useEffect } from "react";
import { ref, set } from "firebase/database";
import { database } from "../../../lib/firebase";

import { shuffleSorting } from "../utils/shuffleSorting";
import { quizSorting } from "@/src/data/quizSorting";

import { QuizSorting } from "@/src/types/types";

interface useInitSortingLevelProps {
  roomId?: string;
}

export function useInitSortingLevel({ roomId }: useInitSortingLevelProps) {
  useEffect(() => {
    const initSortingLevel = async () => {
      try {
        const shuffleQuizSorting: QuizSorting[] = shuffleSorting(
          quizSorting
        ).slice(0, 3);

        const sortingGame = {
          items: shuffleQuizSorting,
        };

        await set(ref(database, `rooms/${roomId}/sortingGame`), sortingGame);

        return sortingGame;
      } catch (error) {
        console.error(error);
      }
    };

    if (!roomId) return;

    initSortingLevel();
  }, [roomId]);
}
