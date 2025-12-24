import { useState, useEffect } from "react";
import { ref, set } from "firebase/database";
import { database } from "../../../lib/firebase";

import { generateId } from "@/src/lib/generateId";
import type { QuizRoom } from "../../../types/types";

export function useInitRoom() {
  const [room, setRoom] = useState<QuizRoom | null>(null);

  useEffect(() => {
    const roomId = generateId();
    const maxQuestions = 20;
    const initRoom = async () => {
      try {
        const roomData: QuizRoom = {
          roomId: roomId,
          createDate: new Date().toLocaleString(),
          isGameEnd: false,
          isGameStarted: false,
          currentQuestionIndex: 0,
          isObstruction: false,
          startTimeRound: Date.now(),
          minPlayers: 2,
          maxPlayers: 8,
          maxQuestions: maxQuestions,
          topics: {},
          questions: [],
          players: {},
        };

        await set(ref(database, `rooms/${roomId}`), roomData);

        setRoom(roomData);

        return roomData;
      } catch (error) {
        console.error(error);
      }
    };

    initRoom();
  }, []);

  return room;
}
