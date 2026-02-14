import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";

import { database } from "@/src/lib/firebase";
import { QuizMovies } from "../types/types";

interface UseMoviesProps {
  roomId?: string;
}

export function useMovies({ roomId }: UseMoviesProps) {
  const [questionMovies, setQuestionMovies] = useState<QuizMovies[]>([]);

  useEffect(() => {
    if (!roomId) return;

    const questionMoviesRef = ref(database, `rooms/${roomId}/moviesGame`);
    const unsub = onValue(questionMoviesRef, (snap) => {
      const data = snap.val() || {};
      setQuestionMovies(Object.values(data));
    });

    return () => unsub();
  }, [roomId]);

  return questionMovies;
}
