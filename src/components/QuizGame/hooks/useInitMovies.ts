import { useState, useEffect } from "react";

import { QuizMovies } from "@/src/types/types";

interface UseInitMovies {
  roomId?: string;
}

export function useInitMovies({ roomId }: UseInitMovies) {
  const [movies, setMovies] = useState<QuizMovies[] | []>([]);

  useEffect(() => {
    if (!roomId) return;

    const initMovies = async () => {
      try {
        const res = await fetch("/api/room/init-movies", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(roomId),
        });

        if (!res.ok) throw new Error("Failed to init movies");

        const data = await res.json();
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    };

    initMovies();
  }, [roomId]);

  return movies;
}
