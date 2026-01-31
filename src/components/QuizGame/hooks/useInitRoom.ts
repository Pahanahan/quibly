import { useState, useEffect } from "react";

import { QuizRoom } from "../../../types/types";

export function useInitRoom() {
  const [room, setRoom] = useState<QuizRoom | null>(null);

  useEffect(() => {
    const initRoom = async () => {
      try {
        const res = await fetch("/api/room/init", { method: "POST" });

        const data: QuizRoom = await res.json();
        setRoom(data);
      } catch (error) {
        console.error(error);
      }
    };

    initRoom();
  }, []);

  return room;
}
