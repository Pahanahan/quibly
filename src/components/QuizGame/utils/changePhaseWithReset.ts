import { editRoom } from "@/src/lib/editRoom";
import { resetCurrentScore } from "./resetCurrentScore";

import { GamePhase, QuizPlayer } from "@/src/types/types";

interface ChangePhaseWithResetInterface {
  roomId: string | null;
  nextPhase: GamePhase;
  players: QuizPlayer[];
}

export const changePhaseWithReset = ({
  roomId,
  nextPhase,
  players,
}: ChangePhaseWithResetInterface) => {
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
  players.forEach((player) => {
    resetCurrentScore({
      roomId: roomId || null,
      player: player.id,
    });
  });
};
