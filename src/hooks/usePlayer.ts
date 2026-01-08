import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";

import { database } from "@/src/lib/firebase";
import { QuizPlayer } from "../types/types";

interface UsePalyerProps {
  roomId?: string;
  userId: string;
}

export function usePlayer({ roomId, userId }: UsePalyerProps) {
  const [player, setPlayer] = useState<QuizPlayer>();

  useEffect(() => {
    if (!roomId || !userId) return;

    const playersRef = ref(database, `rooms/${roomId}/players/${userId}`);
    const unsub = onValue(playersRef, (snap) => {
      const data = snap.val() || {};
      setPlayer(data);
    });

    return () => unsub();
  }, [roomId, userId]);

  return player;
}
