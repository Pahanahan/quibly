export const deleteRoom = async (roomId: string): Promise<void> => {
  try {
    if (!roomId) return;

    const res = await fetch("/api/room/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roomId }),
    });

    if (!res.ok) throw new Error("Failed to delete room");
  } catch (error) {
    console.error("Not found the room", error);
  }
};
