import { NextResponse } from "next/server";
import { ref, set } from "firebase/database";

import { database } from "@/src/lib/firebase";
import { shuffleWords } from "@/src/components/QuizGame/utils/shuffleWords";
import { quizWords } from "@/src/data/quizWords";

export const PATCH = async (req: Request) => {
  try {
    const roomId = await req.json();

    if (!roomId) {
      return NextResponse.json({ error: "Not found room" }, { status: 400 });
    }

    const shuffleQuizWords = shuffleWords(quizWords).slice(0, 4);

    await set(ref(database, `rooms/${roomId}/wordsGame`), shuffleQuizWords);

    return NextResponse.json(shuffleQuizWords);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to init words" },
      { status: 500 },
    );
  }
};
