import { useState, useEffect } from "react";

import { QuizMusics } from "@/src/types/types";

interface UseInitMusics {
  roomId?: string;
}

export function useInitMusics({ roomId }: UseInitMusics) {
  const [movies, setMovies] = useState<QuizMusics[] | []>([]);

  useEffect(() => {
    if (!roomId) return;

    const initMovies = async () => {
      try {
        const res = await fetch("/api/room/init-musics", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(roomId),
        });

        if (!res.ok) throw new Error("Failed to init musics");

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
