import { update, ref } from "firebase/database";
import { database } from "./firebase";

interface EditRoomProps {
  roomId: string | null;
  key: string;
  value: boolean | number | string;
}

export const editRoom = async ({ roomId, key, value }: EditRoomProps) => {
  if (!roomId) return;

  try {
    await update(ref(database, `rooms/${roomId}`), { [key]: value });
  } catch (error) {
    console.error(error);
  }
};
