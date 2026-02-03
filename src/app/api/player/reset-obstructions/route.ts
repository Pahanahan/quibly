import { NextResponse } from "next/server";
import { update, ref } from "firebase/database";

import { database } from "@/src/lib/firebase";

export const PATCH = async (req: Request) => {
  try {
    const { roomId, player } = await req.json();

    if (!roomId) {
      return NextResponse.json({ error: "Not found room" }, { status: 400 });
    }

    await update(ref(database, `rooms/${roomId}/players/${player}`), {
      obstructions: {
        x2: false,
        x5: false,
        x10: false,
        fadeIn: false,
        scale: false,
        blurIn: false,
        rotate: false,
        helicopter: false,
        pulse: false,
        shake: false,
        defender: false,
      },
    });

    return NextResponse.json({ roomId, player });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to reset obstructions in player" },
      { status: 500 },
    );
  }
};
