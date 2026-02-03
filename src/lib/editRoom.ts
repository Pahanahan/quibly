interface EditRoomProps {
  roomId: string | null;
  key: string;
  value: boolean | number | string;
}

export const editRoom = async ({ roomId, key, value }: EditRoomProps) => {
  if (!roomId) return;

  try {
    const res = await fetch("/api/room/edit-room", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roomId, key, value }),
    });

    if (!res.ok) throw new Error("Failed edit room");
  } catch (error) {
    console.error(error);
  }
};
