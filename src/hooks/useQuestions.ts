import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";

import { database } from "@/src/lib/firebase";
import { QuizQuestion } from "../types/types";

interface UseQuestionsProps {
  roomId?: string;
}

export function useQuestions({ roomId }: UseQuestionsProps) {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);

  useEffect(() => {
    if (!roomId) return;

    const questionsRef = ref(database, `rooms/${roomId}/questions`);
    const unsub = onValue(questionsRef, (snap) => {
      const data = snap.val() || {};
      setQuestions(Object.values(data));
    });

    return () => unsub();
  }, [roomId]);

  return questions;
}
