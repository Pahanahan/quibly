import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";

import { database } from "@/src/lib/firebase";

interface useRoomProps {
  roomId?: string | null;
}

export function useRoom({ roomId }: useRoomProps) {
  const [room, setRoom] = useState(null);

  useEffect(() => {
    if (!roomId) return;

    const valueRef = ref(database, `rooms/${roomId}`);
    const unsub = onValue(valueRef, (snap) => {
      const data = snap.val();
      setRoom(data);
    });

    return () => unsub();
  }, [roomId]);

  return room;
}
