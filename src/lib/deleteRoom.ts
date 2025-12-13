import { remove, ref } from "firebase/database";
import { database } from "./firebase";

export const deleteRoom = async (roomId: string): Promise<void> => {
  try {
    await remove(ref(database, `rooms/${roomId}`));
  } catch (error) {
    console.error(`Не удалось удалить комнату ${roomId}`, error);
  }
};
