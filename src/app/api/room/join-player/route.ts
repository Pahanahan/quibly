import { NextResponse } from "next/server";
import { ref, set } from "firebase/database";

import { database } from "@/src/lib/firebase";

export async function POST(req: Response) {
  try {
    const { roomId, playerData } = await req.json();

    if (!roomId || !playerData) {
      return NextResponse.json(
        { error: "roomId is required or playerData is required" },
        { status: 400 },
      );
    }

    await set(
      ref(database, `rooms/${roomId}/players/${playerData.id}`),
      playerData,
    );

    return NextResponse.json(playerData);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to join player" },
      { status: 500 },
    );
  }
}
