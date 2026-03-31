import { NextResponse } from "next/server";
import { ref, runTransaction } from "firebase/database";

import { database } from "@/src/lib/firebase";

export const PATCH = async (req: Request) => {
  try {
    const { roomId, userId, score } = await req.json();

    if (!roomId) {
      return NextResponse.json({ error: "Room not found" }, { status: 400 });
    }

    const playerRef = ref(database, `rooms/${roomId}/players/${userId}/score`);

    await runTransaction(playerRef, (currentScore) => {
      return (currentScore || 0) + score;
    });

    return NextResponse.json({ score: score });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed update score to player" },
      { status: 500 },
    );
  }
};
