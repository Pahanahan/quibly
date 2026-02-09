import { NextResponse } from "next/server";
import { update, ref } from "firebase/database";
import { database } from "@/src/lib/firebase";

export const PATCH = async (req: Request) => {
  try {
    const { roomId, player, key, value } = await req.json();

    if (!roomId) {
      return NextResponse.json({ error: "Not found room" }, { status: 400 });
    }

    await update(
      ref(database, `rooms/${roomId}/players/${player}/obstructions`),
      {
        [key]: value,
      },
    );

    return NextResponse.json({ key, value });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed edit obstruction in player" },
      { status: 500 },
    );
  }
};
