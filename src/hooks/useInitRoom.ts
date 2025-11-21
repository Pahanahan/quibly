import { useState, useEffect } from "react";

import { generateId, shuffleQuestions } from "@/src/lib/utils";
import questions from "@/src/data/quizQuestions";
import type { QuizRoom } from "../types/types";

export function useInitRoom() {
  const [room, setRoom] = useState<QuizRoom | null>(null);

  useEffect(() => {
    const roomId = generateId();
    const initRoom = async () => {
      try {
        const roomData = {
          roomId: roomId,
          isActive: true,
          currentQuestionIndex: 0,
          isGameStarted: false,
          minPlayers: 2,
          maxPlayers: 8,
          questions: shuffleQuestions(questions).slice(0, 10),
          players: {
            fakePlayer: {
              userName: "Fake",
              ready: true,
              id: "idFake",
              score: 0,
              avatar: "cow",
              isFake: true,
            },
            //   player2: {
            //     userName: "Tosha",
            //     ready: true,
            //     id: "id2",
            //     score: 100,
            //     avatar: "bull",
            //   },
            //   player3: {
            //     userName: "Pavel",
            //     ready: true,
            //     id: "id3",
            //     score: 300,
            //     avatar: "camel",
            //   },
            //   player4: {
            //     userName: "Vasily",
            //     ready: true,
            //     id: "id4",
            //     score: 500,
            //     avatar: "zebra",
            //   },
          },
        };

        const response = await fetch(
          `https://quizgame-30deb-default-rtdb.firebaseio.com/rooms/${roomId}.json`,
          {
            method: "PUT",
            body: JSON.stringify(roomData),
          }
        );

        if (!response.ok) throw new Error("Ошбика при создании комнаты!");

        const result = await response.json();
        setRoom(result);

        return result;
      } catch (error) {
        console.error(error);
      }
    };

    initRoom();
  }, []);

  return room;
}
