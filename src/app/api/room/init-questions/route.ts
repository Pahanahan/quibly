import { NextResponse } from "next/server";
import { ref, set, get } from "firebase/database";

import { database } from "@/src/lib/firebase";
import { shuffleQuestions } from "@/src/components/QuizGame/utils/shuffleQuestions";
import questions from "@/src/data/quizQuestions";

export async function PATCH(req: Request) {
  try {
    const { roomId, topics } = await req.json();

    const roomRef = ref(database, `rooms/${roomId}`);
    const snap = await get(roomRef);

    if (!snap.exists() || !roomId) {
      return NextResponse.json({ error: "Not found room" }, { status: 400 });
    }

    const room = snap.val();
    const maxQuestions: number = room.maxQuestions ?? 20;

    const quizQuestions = questions.filter((category) =>
      Object.keys(topics).includes(category.category),
    );

    const shuffleQuizQuestions = shuffleQuestions(quizQuestions).slice(
      0,
      maxQuestions,
    );

    await set(ref(database, `rooms/${roomId}/questions`), shuffleQuizQuestions);

    return NextResponse.json(shuffleQuizQuestions);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Faild to init quesitons" },
      { status: 500 },
    );
  }
}
