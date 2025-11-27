import { useState, useEffect } from "react";
import { ref, set } from "firebase/database";
import { database } from "../lib/firebase";

import { generateId, shuffleQuestions } from "@/src/lib/utils";
import questions from "../data/quizQuestions";
import type { QuizRoom } from "../types/types";

export function useInitRoom() {
  const [room, setRoom] = useState<QuizRoom | null>(null);

  useEffect(() => {
    const roomId = generateId();
    const maxQuestions = 20;
    const initRoom = async () => {
      try {
        const roomData: QuizRoom = {
          roomId: roomId,
          isGameEnd: false,
          currentQuestionIndex: 0,
          isGameStarted: false,
          minPlayers: 2,
          maxPlayers: 8,
          maxQuestions: maxQuestions,
          questions: shuffleQuestions(questions).slice(0, maxQuestions),
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
