import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";

import { database } from "@/src/lib/firebase";

interface useRoomFieldsProps {
  roomId?: string | null;
  key: string;
}

export function useRoomFields({ roomId, key }: useRoomFieldsProps) {
  const [values, setValues] = useState(null);

  useEffect(() => {
    if (!roomId) return;

    const valueRef = ref(database, `rooms/${roomId}/${key}`);
    const unsub = onValue(valueRef, (snap) => {
      const data = snap.val();
      setValues(data);
    });

    return () => unsub();
  }, [roomId, key]);

  return values;
}
