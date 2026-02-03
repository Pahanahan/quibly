interface ResetCurrentScoreProps {
  roomId: string | null;
  player: string;
}

export const resetCurrentScore = async ({
  roomId,
  player,
}: ResetCurrentScoreProps) => {
  try {
    if (!roomId) return;

    const res = await fetch("/api/player/reset-score", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roomId, player }),
    });

    if (!res.ok) throw new Error("Failed reset score in player");
  } catch (error) {
    console.error(error);
  }
};
