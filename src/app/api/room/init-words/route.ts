import { NextResponse } from "next/server";
import { ref, set } from "firebase/database";

import { database } from "@/src/lib/firebase";
import { getRandomLevelsWords } from "@/src/server/getRandomLevelsWords";
import { quizWords } from "@/src/data/quizWords";

export const PATCH = async (req: Request) => {
  try {
    const roomId = await req.json();

    if (!roomId) {
      return NextResponse.json({ error: "Not found room" }, { status: 400 });
    }

    const randomLevels = getRandomLevelsWords(quizWords, 4);

    await set(ref(database, `rooms/${roomId}/wordsGame`), randomLevels);

    return NextResponse.json(randomLevels);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to init words" },
      { status: 500 },
    );
  }
};
