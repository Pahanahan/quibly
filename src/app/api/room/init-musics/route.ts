import { NextResponse } from "next/server";
import { ref, set } from "firebase/database";

import { database } from "@/src/lib/firebase";
import { shuffleMusics } from "@/src/components/QuizGame/utils/shuffleMusics";
import { quizMusics } from "@/src/data/quizMusics";

export const PATCH = async (req: Request) => {
  try {
    const roomId = await req.json();

    if (!roomId) {
      return NextResponse.json({ error: "Not found room" }, { status: 400 });
    }

    const shuffleQuizMusics = shuffleMusics(quizMusics).slice(0, 7);

    await set(ref(database, `rooms/${roomId}/musicsGame`), shuffleQuizMusics);

    return NextResponse.json(shuffleQuizMusics);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to init musics" },
      { status: 500 },
    );
  }
};
