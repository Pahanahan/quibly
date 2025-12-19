import { update, ref } from "firebase/database";
import { database } from "../../../lib/firebase";

interface ResetObstructionsProps {
  roomId: string | null;
  player: string;
}

export const resetObstructions = async ({
  roomId,
  player,
}: ResetObstructionsProps) => {
  if (!roomId) return;

  try {
    await update(ref(database, `rooms/${roomId}/players/${player}`), {
      obstructions: [],
    });
  } catch (error) {
    console.error(error);
  }
};
