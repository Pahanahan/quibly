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
    const res = await fetch("/api/player/edit-player", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roomId, player, key, value }),
    });

    if (!res.ok) throw new Error("Failed to edit player");
  } catch (error) {
    console.error(error);
  }
};
