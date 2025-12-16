import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";

import { database } from "@/src/lib/firebase";
import { QuizPlayer } from "../../../types/types";

interface UsePalyersProps {
  roomId?: string;
}

export function usePlayers({ roomId }: UsePalyersProps) {
  const [players, setPlayers] = useState<QuizPlayer[]>([]);

  useEffect(() => {
    if (!roomId) return;

    const playersRef = ref(database, `rooms/${roomId}/players`);
    const unsub = onValue(playersRef, (snap) => {
      const data = snap.val() || {};
      setPlayers(Object.values(data));
    });

    return () => unsub();
  }, [roomId]);

  return players;
}
