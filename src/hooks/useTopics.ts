import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../lib/firebase";

interface QuizTopics {
  [key: string]: string;
}

interface useTopicsProps {
  roomId: string | undefined;
}

export const useTopics = ({ roomId }: useTopicsProps) => {
  const [topics, setTopics] = useState<QuizTopics>({});

  useEffect(() => {
    if (!roomId) return;

    const topicsRef = ref(database, `rooms/${roomId}/topics`);

    const unsubscribe = onValue(topicsRef, (snap) => {
      const data = snap.val() || {};
      setTopics(data);
    });

    return () => unsubscribe();
  }, [roomId]);

  return topics;
};
