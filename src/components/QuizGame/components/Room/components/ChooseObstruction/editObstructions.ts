import { update, ref } from "firebase/database";
import { database } from "@/src/lib/firebase";

interface EditObstructionsProps {
  roomId: string;
  player: string;
  key: string;
  value: number | string | boolean;
}

export const editObstructions = async ({
  roomId,
  player,
  key,
  value,
}: EditObstructionsProps) => {
  if (!roomId) return;

  try {
    await update(
      ref(database, `rooms/${roomId}/players/${player}/obstructions`),
      {
        [key]: value,
      }
    );
  } catch (error) {
    console.error(error);
  }
};
