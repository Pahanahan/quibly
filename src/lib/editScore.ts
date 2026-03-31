interface EditScoreProps {
  roomId: string;
  userId: string;
  score: number;
}

export const editScore = async ({ roomId, userId, score }: EditScoreProps) => {
  if (!roomId) return;

  try {
    const res = await fetch("/api/player/edit-score", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roomId, userId, score }),
    });

    if (!res.ok) throw new Error("Failed update score to player");
  } catch (error) {
    console.error(error);
  }
};
