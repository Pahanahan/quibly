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
          createDate: new Date().toLocaleString(),
          isGameEnd: false,
          currentQuestionIndex: 0,
          isGameStarted: false,
          minPlayers: 2,
          maxPlayers: 8,
          maxQuestions: maxQuestions,
          topics: [],
          questions: shuffleQuestions(questions).slice(0, maxQuestions),
          players: {
            Vasily: {
              avatar: "fish",
              currentScore: 0,
              id: "Vasily",
              ready: true,
              score: 0,
              userName: "Vasily",
            },
            Vitaly: {
              avatar: "bull",
              currentScore: 0,
              id: "Vitaly",
              ready: true,
              score: 0,
              userName: "Vitaly",
            },
            // Tosha: {
            //   avatar: "horse",
            //   currentScore: 0,
            //   id: "Tosha",
            //   ready: true,
            //   score: 0,
            //   userName: "Tosha",
            // },
            // Vlad: {
            //   avatar: "cat",
            //   currentScore: 0,
            //   id: "Vlad",
            //   ready: true,
            //   score: 0,
            //   userName: "Vlad",
            // },
            // Tanya: {
            //   avatar: "lion",
            //   currentScore: 0,
            //   id: "Tanya",
            //   ready: true,
            //   score: 0,
            //   userName: "Tanya",
            // },
            // Denis: {
            //   avatar: "tiger",
            //   currentScore: 0,
            //   id: "Denis",
            //   ready: true,
            //   score: 0,
            //   userName: "Denis",
            // },
            // Slava: {
            //   avatar: "giraffe",
            //   currentScore: 0,
            //   id: "Slava",
            //   ready: true,
            //   score: 0,
            //   userName: "Slava",
            // },
          },
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
