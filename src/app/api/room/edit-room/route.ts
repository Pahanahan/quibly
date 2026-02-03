import { NextResponse } from "next/server";
import { update, ref } from "firebase/database";

import { database } from "@/src/lib/firebase";

export const PATCH = async (req: Request) => {
  const { roomId, key, value } = await req.json();

  try {
    if (!roomId) {
      return NextResponse.json({ error: "Not found room" }, { status: 400 });
    }

    await update(ref(database, `rooms/${roomId}`), { [key]: value });

    return NextResponse.json({ key, value });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed edit room" }, { status: 500 });
  }
};
