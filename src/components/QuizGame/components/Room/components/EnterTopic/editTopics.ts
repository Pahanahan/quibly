import { update, ref } from "firebase/database";
import { database } from "@/src/lib/firebase";

interface EditTopicsProps {
  roomId: string | null;
  key: string;
  value: string;
}

export const editTopics = async ({ roomId, key, value }: EditTopicsProps) => {
  if (!roomId) return;

  try {
    await update(ref(database, `rooms/${roomId}/topics`), { [key]: value });
  } catch (error) {
    console.error(error);
  }
};
