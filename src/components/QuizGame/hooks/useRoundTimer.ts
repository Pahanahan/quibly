import { useEffect } from "react";

import { getDateNow } from "@/src/lib/getDateNow";
import { changePhase } from "../utils/changePhase";
import { quizRounds } from "@/src/data/quizRounds";

import { GamePhase, QuizPlayer } from "@/src/types/types";

export const useRoundTimer = (
  roomId: string | null,
  gamePhase: GamePhase | null,
  currentRound: number,
  startTimeRound: number,
  players: QuizPlayer[],
  setCurrentRound: React.Dispatch<React.SetStateAction<number>>,
) => {
  useEffect(() => {
    if (!roomId) return;
    if (gamePhase === GamePhase.GAME_END) return;
    if (gamePhase === GamePhase.LOBBY) return;

    const round = quizRounds[currentRound];
    if (!round) return;

    const interval = setInterval(() => {
      const dateNow = getDateNow();
      const endTime = startTimeRound + round.duration - dateNow;

      if (endTime <= 0) {
        setCurrentRound((prevState) => {
          const next = prevState + 1;

          changePhase({
            roomId,
            gamePhase,
            nextPhase: quizRounds[next].gamePhase,
            nextIndex: next,
            players: players,
          });

          return next;
        });
      }
    }, 500);

    return () => clearInterval(interval);
  }, [
    roomId,
    gamePhase,
    currentRound,
    startTimeRound,
    players,
    setCurrentRound,
  ]);
};
