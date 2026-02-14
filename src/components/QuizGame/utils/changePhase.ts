import { editRoom } from "@/src/lib/editRoom";

import { GamePhase } from "@/src/types/types";

interface ChangePhaseInterface {
  roomId: string | null;
  nextPhase: GamePhase;
}

export const changePhase = ({ roomId, nextPhase }: ChangePhaseInterface) => {
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
};
