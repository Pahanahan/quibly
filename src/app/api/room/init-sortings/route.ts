import { NextResponse } from "next/server";
import { ref, set } from "firebase/database";

import { database } from "@/src/lib/firebase";
import { shuffleSorting } from "@/src/components/QuizGame/utils/shuffleSorting";
import { quizSorting } from "@/src/data/quizSorting";

import { QuizSorting } from "@/src/types/types";

export async function PATCH(req: Request) {
  try {
    const { roomId } = await req.json();

    if (!roomId) {
      return NextResponse.json(
        { error: "roomId is required" },
        { status: 400 },
      );
    }

    const shuffleQuizSorting: QuizSorting[] = shuffleSorting(quizSorting).slice(
      0,
      3,
    );

    const sortingGame = {
      items: shuffleQuizSorting,
    };

    await set(ref(database, `rooms/${roomId}/sortingGame`), sortingGame);

    return NextResponse.json(sortingGame);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Faild to init sorting" },
      { status: 500 },
    );
  }
}
