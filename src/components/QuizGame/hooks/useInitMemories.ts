import { useState, useEffect } from "react";

import { QuizMemoriesItems } from "@/src/types/types";

interface UseInitMemoriesProps {
  roomId?: string;
}

export function useInitMemories({ roomId }: UseInitMemoriesProps) {
  const [memories, setMemories] = useState<QuizMemoriesItems | null>(null);

  useEffect(() => {
    if (!roomId) return;

    const initMemories = async () => {
      try {
        const res = await fetch("api/room/init-memories", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ roomId }),
        });

        if (!res.ok) throw new Error("Failed to init memories");

        const data: QuizMemoriesItems = await res.json();
        setMemories(data);
      } catch (error) {
        console.error(error);
      }
    };

    initMemories();
  }, [roomId]);

  return memories;
}
