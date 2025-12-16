import { update, ref } from "firebase/database";
import { database } from "./firebase";

interface EditPlayerProps {
  roomId: string;
  player: string;
  key: string;
  value: number | string;
}

export const editPlayer = async ({
  roomId,
  player,
  key,
  value,
}: EditPlayerProps) => {
  if (!roomId) return;

  try {
    await update(ref(database, `rooms/${roomId}/players/${player}`), {
      [key]: value,
    });
  } catch (error) {
    console.error(error);
  }
};
