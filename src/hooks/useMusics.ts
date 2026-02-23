import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";

import { database } from "@/src/lib/firebase";
import { QuizMusics } from "../types/types";

interface UseMusicsProps {
  roomId?: string;
}

export function useMusics({ roomId }: UseMusicsProps) {
  const [questionMusic, setQuestionMusic] = useState<QuizMusics[]>([]);

  useEffect(() => {
    if (!roomId) return;

    const questionMusicsRef = ref(database, `rooms/${roomId}/musicsGame`);
    const unsub = onValue(questionMusicsRef, (snap) => {
      const data = snap.val() || {};
      setQuestionMusic(Object.values(data));
    });

    return () => unsub();
  }, [roomId]);

  return questionMusic;
}
