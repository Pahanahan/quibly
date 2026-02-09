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
  try {
    if (!roomId) return;

    const res = await fetch("/api/player/edit-obstruction", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roomId, player, key, value }),
    });

    if (!res.ok) throw new Error("Failed edit obstruction in player");
  } catch (error) {
    console.log(error);
  }
};
