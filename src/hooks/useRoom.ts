import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";

import { database } from "@/src/lib/firebase";

interface UseRoomProps {
  roomId: string;
}

export function useRoom({ roomId }: UseRoomProps) {
  const [room, setRoom] = useState(null);

  useEffect(() => {
    if (!roomId) return;

    const roomRef = ref(database, `rooms/${roomId}`);
    const unsub = onValue(roomRef, (snap) => {
      setRoom(snap.val());
    });

    return () => unsub();
  }, [roomId]);

  return room;
}
