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
      obstructions: {
        x2: false,
        x5: false,
        x10: false,
        fadeIn: false,
        scale: false,
        blurIn: false,
        rotate: false,
        helicopter: false,
        pulse: false,
        shake: false,
        defender: false,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
