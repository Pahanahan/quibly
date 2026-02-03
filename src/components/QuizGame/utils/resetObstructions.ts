interface ResetObstructionsProps {
  roomId: string | null;
  player: string;
}

export const resetObstructions = async ({
  roomId,
  player,
}: ResetObstructionsProps) => {
  try {
    if (!roomId) return;

    const res = await fetch("/api/player/reset-obstructions", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roomId, player }),
    });

    if (!res.ok) throw new Error("Failed reset obstructions in player");
  } catch (error) {
    console.error(error);
  }
};
