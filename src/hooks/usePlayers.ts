import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";

import { database } from "@/src/lib/firebase";

interface Player {
  userName: string;
  ready: boolean;
  id: string;
  score: number;
  avatar: string;
}

interface UsePalyersProps {
  roomId?: string;
}

export function usePlayers({ roomId }: UsePalyersProps) {
  const [players, setPlayers] = useState<Player[]>([]);

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
