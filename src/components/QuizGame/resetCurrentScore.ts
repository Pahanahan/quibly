import { update, ref } from "firebase/database";
import { database } from "../../lib/firebase";

interface ResetCurrentScoreProps {
  roomId: string | null;
  player: string;
}

export const resetCurrentScore = async ({
  roomId,
  player,
}: ResetCurrentScoreProps) => {
  if (!roomId) return;

  try {
    await update(ref(database, `rooms/${roomId}/players/${player}`), {
      currentScore: 0,
    });
  } catch (error) {
    console.error(error);
  }
};
