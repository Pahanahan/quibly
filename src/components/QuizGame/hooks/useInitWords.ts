import { useState, useEffect } from "react";

import { QuizWords } from "@/src/types/types";

interface UseInitWords {
  roomId?: string;
}

export function useInitWords({ roomId }: UseInitWords) {
  const [words, setWords] = useState<QuizWords[] | []>([]);

  useEffect(() => {
    if (!roomId) return;

    const initWords = async () => {
      try {
        const res = await fetch("/api/room/init-words", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(roomId),
        });

        if (!res.ok) throw new Error("Failed to init words");

        const data = await res.json();
        setWords(data);
      } catch (error) {
        console.error(error);
      }
    };

    initWords();
  }, [roomId]);

  return words;
}
