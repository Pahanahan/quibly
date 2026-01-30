import { NextResponse } from "next/server";
import { ref, set } from "firebase/database";
import { database } from "@/src/lib/firebase";

import { generateId } from "@/src/lib/generateId";
import { GamePhase, QuizRoom } from "@/src/types/types";

export async function POST() {
  try {
    const roomId = generateId();

    const roomData: QuizRoom = {
      roomId: roomId,
      createDate: new Date().toLocaleString(),
      currentQuestionIndex: 0,
      gamePhase: GamePhase.LOBBY,
      startTimeRound: Date.now(),
      minPlayers: 2,
      maxPlayers: 8,
      maxQuestions: 20,
      topics: {},
      questions: [],
      players: {},
      memoryGame: {},
      sortingGame: {},
    };

    await set(ref(database, `rooms/${roomId}`), roomData);

    return NextResponse.json(roomData);
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to create room: Error ${error}` },
      { status: 500 },
    );
  }
}
