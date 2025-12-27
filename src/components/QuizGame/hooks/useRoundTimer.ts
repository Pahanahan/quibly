import { useEffect } from "react";

import { editRoom } from "@/src/lib/editRoom";
import { resetObstructions } from "../utils/resetObstructions";

import { GamePhase, QuizPlayer } from "@/src/types/types";

const TIME = 13000;
const ANSWER_DURATION = 7000;
const OBSTRUCTION_DURATION = 13000;

const obstructionRounds = [0, 2, 4, 6, 8, 10, 12, 14, 16];

export const useRoundTimer = (
  roomId: string | null,
  startTimeRound: number,
  gamePhase: GamePhase,
  setGamePhase: React.Dispatch<React.SetStateAction<GamePhase>>,
  currentQuestion: number,
  newRound: () => void,
  players: QuizPlayer[]
) => {
  useEffect(() => {
    if (gamePhase !== "question") return;

    const timer = setTimeout(() => {
      setGamePhase("answer");
    }, TIME);

    return () => clearTimeout(timer);
  }, [gamePhase, setGamePhase]);

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
        editRoom({
          roomId: roomId || null,
          key: "startTimeRound",
          value: Date.now(),
        });

        return;
      } else {
        players.forEach((player) => {
          resetObstructions({
            roomId: roomId || null,
            player: player.id,
          });
        });
        setGamePhase("question");
        newRound();
      }
    }, ANSWER_DURATION);

    return () => clearTimeout(timer);
  }, [roomId, gamePhase, currentQuestion, newRound, setGamePhase, players]);

  useEffect(() => {
    if (gamePhase !== "obstruction") return;

    const endTime = startTimeRound + OBSTRUCTION_DURATION;

    const interval = setInterval(() => {
      if (Date.now() >= endTime) {
        editRoom({
          roomId: roomId || null,
          key: "isObstruction",
          value: false,
        });
        setGamePhase("question");
        newRound();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [roomId, gamePhase, startTimeRound, setGamePhase, newRound]);
};
