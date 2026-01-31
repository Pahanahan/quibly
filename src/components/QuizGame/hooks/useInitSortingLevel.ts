import { useState, useEffect } from "react";

import { QuizSortingItems } from "@/src/types/types";

interface UseInitSortingLevelProps {
  roomId?: string;
}

export function useInitSortingLevel({ roomId }: UseInitSortingLevelProps) {
  const [sortings, setSortings] = useState<QuizSortingItems | null>(null);

  useEffect(() => {
    if (!roomId) return;

    const initSortingLevel = async () => {
      try {
        const res = await fetch("api/room/init-sortings", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ roomId }),
        });

        if (!res.ok) throw new Error("Failed init sorting level");

        const data: QuizSortingItems = await res.json();
        setSortings(data);
      } catch (error) {
        console.error(error);
      }
    };

    initSortingLevel();
  }, [roomId]);

  return sortings;
}
