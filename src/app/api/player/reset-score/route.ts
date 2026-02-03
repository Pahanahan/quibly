import { NextResponse } from "next/server";
import { update, ref } from "firebase/database";

import { database } from "@/src/lib/firebase";

export const PATCH = async (req: Request) => {
  const { roomId, player } = await req.json();

  try {
    if (!roomId) {
      return NextResponse.json({ error: "Not found room" }, { status: 400 });
    }

    await update(ref(database, `rooms/${roomId}/players/${player}`), {
      currentScore: 0,
    });

    return NextResponse.json({ roomId, player });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to reset score in player" },
      { status: 500 },
    );
  }
};
