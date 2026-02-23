import { NextResponse } from "next/server";
import { ref, set } from "firebase/database";

import { database } from "@/src/lib/firebase";
import { shuffleMovies } from "@/src/components/QuizGame/utils/shuffleMovies";
import quizMovies from "@/src/data/quizMovies";

export const PATCH = async (req: Request) => {
  try {
    const roomId = await req.json();

    if (!roomId) {
      return NextResponse.json({ error: "Not found room" }, { status: 400 });
    }

    const shuffleQuizMovies = shuffleMovies(quizMovies).slice(0, 5);

    await set(ref(database, `rooms/${roomId}/moviesGame`), shuffleQuizMovies);

    return NextResponse.json(shuffleQuizMovies);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to init movies" },
      { status: 500 },
    );
  }
};
