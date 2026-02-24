import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";

import { database } from "@/src/lib/firebase";
import { QuizWords } from "@/src/types/types";

interface UseWordsProps {
  roomId?: string;
}

export function useWords({ roomId }: UseWordsProps) {
  const [words, setWords] = useState<QuizWords[]>([]);

  useEffect(() => {
    if (!roomId) return;

    const questionWordsRef = ref(database, `rooms/${roomId}/wordsGame`);
    const unsub = onValue(questionWordsRef, (snap) => {
      const data = snap.val() || {};
      setWords(Object.values(data));
    });

    return () => unsub();
  }, [roomId]);

  return words;
}
