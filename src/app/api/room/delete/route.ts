import { NextResponse } from "next/server";
import { remove, ref } from "firebase/database";

import { database } from "@/src/lib/firebase";

export async function DELETE(req: Request) {
  try {
    const { roomId } = await req.json();

    if (!roomId) {
      return NextResponse.json(
        { error: "roomId is required" },
        { status: 400 },
      );
    }

    await remove(ref(database, `rooms/${roomId}`));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete room" },
      { status: 500 },
    );
  }
}
