import { NextResponse } from "next/server";
import { update, ref } from "firebase/database";

import { database } from "@/src/lib/firebase";

export const PATCH = async (req: Request) => {
  try {
    const { roomId, key, value } = await req.json();

    console.log(roomId, key, value);

    if (!roomId) {
      return NextResponse.json({ error: "Room not found" }, { status: 400 });
    }

    await update(ref(database, `rooms/${roomId}/topics`), { [key]: value });

    return NextResponse.json({ key, value });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to edit topics" },
      { status: 500 },
    );
  }
};
