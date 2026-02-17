import { editRoom } from "@/src/lib/editRoom";
import { resetCurrentScore } from "./resetCurrentScore";
import { resetObstructions } from "./resetObstructions";

import { GamePhase, QuizPlayer } from "@/src/types/types";

interface ChangePhaseInterface {
  roomId: string | null;
  gamePhase: GamePhase | null;
  nextPhase: GamePhase;
  nextIndex: number;
  players: QuizPlayer[];
}

export const changePhase = ({
  roomId,
  gamePhase,
  nextPhase,
  nextIndex,
  players,
}: ChangePhaseInterface) => {
  editRoom({
    roomId: roomId || null,
    key: "currentRound",
    value: nextIndex,
  });
  editRoom({
    roomId: roomId || null,
    key: "gamePhase",
    value: nextPhase,
  });
  editRoom({
    roomId: roomId || null,
    key: "startTimeRound",
    value: Date.now(),
  });

  if (nextPhase === GamePhase.INTRO) {
    players.forEach((player) => {
      resetCurrentScore({
        roomId: roomId || null,
        player: player.id,
      });
    });
  }

  if (
    gamePhase === GamePhase.ANSWER ||
    gamePhase === GamePhase.MEMORY_ANSWER ||
    gamePhase === GamePhase.SORTING_ANSWER ||
    gamePhase === GamePhase.MOVIES_ANSWER
  ) {
    players.forEach((player) => {
      resetObstructions({
        roomId: roomId || null,
        player: player.id,
      });
    });
  }
};
