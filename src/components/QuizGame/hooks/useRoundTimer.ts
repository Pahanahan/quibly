import { useEffect } from "react";

import { editRoom } from "@/src/lib/editRoom";
import { resetObstructions } from "../utils/resetObstructions";

import { GamePhase, QuizPlayer } from "@/src/types/types";

const TIME = 11;
const ANSWER_DURATION = 7;
const OBSTRUCTION_DURATION = 15;

// const obstructionRounds = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18];
const obstructionRounds = [100];

export const useRoundTimer = (
  roomId: string | null,
  startTime: number,
  setStartTime: React.Dispatch<React.SetStateAction<number>>,
  gamePhase: GamePhase,
  setGamePhase: React.Dispatch<React.SetStateAction<GamePhase>>,
  currentQuestion: number,
  newRound: () => void,
  players: QuizPlayer[]
) => {
  useEffect(() => {
    if (gamePhase !== "question") return;

    const timer = setTimeout(() => {
      if (startTime >= TIME) {
        setGamePhase("answer");
        return;
      }

      setStartTime((prev) => prev + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [startTime, setStartTime, gamePhase, setGamePhase]);

  useEffect(() => {
    if (gamePhase !== "answer") return;

    const isObstructionRound = obstructionRounds.includes(currentQuestion);

    const timer = setTimeout(() => {
      if (isObstructionRound) {
        setGamePhase("obstruction");
        editRoom({
          roomId: roomId || null,
          key: "isObstruction",
          value: true,
        });
      } else {
        players.forEach((player) => {
          resetObstructions({
            roomId: roomId || null,
            player: player.id,
          });
        });
        newRound();
        setGamePhase("question");
      }
    }, ANSWER_DURATION * 1000);

    return () => clearTimeout(timer);
  }, [roomId, gamePhase, currentQuestion, newRound, setGamePhase, players]);

  useEffect(() => {
    if (gamePhase !== "obstruction") return;

    const timer = setTimeout(() => {
      newRound();
      editRoom({
        roomId: roomId || null,
        key: "isObstruction",
        value: false,
      });
      setGamePhase("question");
    }, OBSTRUCTION_DURATION * 1000);

    return () => clearTimeout(timer);
  }, [roomId, gamePhase, setGamePhase, newRound]);
};
