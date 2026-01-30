import { NextResponse } from "next/server";
import { ref, set } from "firebase/database";

import { database } from "@/src/lib/firebase";
import { shuffleMemories } from "@/src/components/QuizGame/utils/shuffleMemories";
import { quizMemories } from "@/src/data/quizMemories";

export async function POST(req: Request) {
  try {
    const { roomId } = await req.json();

    if (!roomId) {
      return NextResponse.json(
        { error: "roomId is required" },
        { status: 400 },
      );
    }

    const shuffledMemories = shuffleMemories(quizMemories);

    const memoryGame = {
      items: shuffledMemories,
    };

    await set(ref(database, `rooms/${roomId}/memoryGame`), memoryGame);

    return NextResponse.json(memoryGame);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to init memories" },
      { status: 500 },
    );
  }
}
