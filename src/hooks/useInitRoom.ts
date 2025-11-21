import { useState, useEffect } from "react";

import { generateId, shuffleQuestions } from "@/src/lib/utils";
import questions from "@/src/data/quizQuestions";

interface Question {
  question: string;
  id: number;
  answers: string[];
  rightAnswer: string;
}

interface Player {
  userName: string;
  ready: boolean;
  id: string;
  score: number;
  avatar: string;
}

interface RoomInterface {
  currentQuestionIndex: number;
  isActive: boolean;
  isGameStarted: boolean;
  maxPlayers: number;
  minPlayers: number;
  players?: Record<string, Player>;
  questions: Question[];
  roomId: string;
}

export function useInitRoom() {
  const [room, setRoom] = useState<RoomInterface | null>(null);

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
            player1: {
              userName: "Vitaly",
              ready: true,
              id: "id1",
              score: 2000,
              avatar: "cow",
            },
            player2: {
              userName: "Tosha",
              ready: true,
              id: "id2",
              score: 100,
              avatar: "bull",
            },
            player3: {
              userName: "Pavel",
              ready: true,
              id: "id3",
              score: 300,
              avatar: "camel",
            },
            player4: {
              userName: "Vasily",
              ready: true,
              id: "id4",
              score: 500,
              avatar: "zebra",
            },
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
