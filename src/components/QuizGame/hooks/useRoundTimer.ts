import { useEffect } from "react";

import { editRoom } from "@/src/lib/editRoom";
import { resetObstructions } from "../utils/resetObstructions";

import { GamePhase, QuizPlayer } from "@/src/types/types";

const QUESTION_DURATION = 13000;
const ANSWER_DURATION = 7000;
const OBSTRUCTION_DURATION = 13000;
const MEMORY_DURATION = 10000;
const MEMORY_CHOOSE_DURATION = 13000;
const MEMORY_ANSWER_DURATION = 7000;

const obstructionRounds = [0, 2, 4, 6, 8, 12, 14, 16];
const memoryRound = 10;

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
    if (gamePhase !== GamePhase.QUESTION) return;

    const timer = setTimeout(() => {
      setGamePhase(GamePhase.ANSWER);
    }, QUESTION_DURATION);

    return () => clearTimeout(timer);
  }, [gamePhase, setGamePhase]);

  useEffect(() => {
    if (gamePhase !== GamePhase.ANSWER) return;

    const isObstructionRound = obstructionRounds.includes(currentQuestion);

    const isMemoryRound = memoryRound === currentQuestion;

    const timer = setTimeout(() => {
      if (isObstructionRound) {
        setGamePhase(GamePhase.OBSTRUCTION);
        editRoom({
          roomId: roomId || null,
          key: "gamePhase",
          value: GamePhase.OBSTRUCTION,
        });
        editRoom({
          roomId: roomId || null,
          key: "startTimeRound",
          value: Date.now(),
        });

        return;
      } else if (isMemoryRound) {
        setGamePhase(GamePhase.MEMORY);
        editRoom({
          roomId: roomId || null,
          key: "gamePhase",
          value: GamePhase.MEMORY,
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
        setGamePhase(GamePhase.QUESTION);
        newRound();
      }
    }, ANSWER_DURATION);

    return () => clearTimeout(timer);
  }, [roomId, gamePhase, currentQuestion, newRound, setGamePhase, players]);

  useEffect(() => {
    if (gamePhase !== GamePhase.OBSTRUCTION) return;

    const endTime = startTimeRound + OBSTRUCTION_DURATION;

    const interval = setInterval(() => {
      if (Date.now() >= endTime) {
        editRoom({
          roomId: roomId || null,
          key: "gamePhase",
          value: GamePhase.QUESTION,
        });
        setGamePhase(GamePhase.QUESTION);
        newRound();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [roomId, gamePhase, startTimeRound, setGamePhase, newRound]);

  useEffect(() => {
    if (gamePhase !== GamePhase.MEMORY) return;
    const timer = setTimeout(() => {
      setGamePhase(GamePhase.MEMORY_CHOOSE);
    }, MEMORY_DURATION);

    return () => clearTimeout(timer);
  }, [roomId, gamePhase, setGamePhase]);

  useEffect(() => {
    if (gamePhase !== GamePhase.MEMORY_CHOOSE) return;
    const timer = setTimeout(() => {
      setGamePhase(GamePhase.MEMORY_ANSWER);
    }, MEMORY_CHOOSE_DURATION);

    return () => clearTimeout(timer);
  }, [roomId, gamePhase, setGamePhase]);

  useEffect(() => {
    if (gamePhase !== GamePhase.MEMORY_ANSWER) return;

    const endTime = startTimeRound + MEMORY_ANSWER_DURATION;

    const timer = setTimeout(() => {
      if (Date.now() >= endTime) {
        editRoom({
          roomId: roomId || null,
          key: "gamePhase",
          value: GamePhase.QUESTION,
        });
        editRoom({
          roomId: roomId || null,
          key: "startTimeRound",
          value: Date.now(),
        });
        players.forEach((player) => {
          resetObstructions({
            roomId: roomId || null,
            player: player.id,
          });
        });
        setGamePhase(GamePhase.QUESTION);
        newRound();
      }
    }, MEMORY_ANSWER_DURATION);

    return () => clearTimeout(timer);
  }, [roomId, gamePhase, setGamePhase, startTimeRound, players, newRound]);
};
