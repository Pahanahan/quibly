import { useEffect, useState } from "react";

import VisualMemoryStart from "./components/VisualMemoryStart/VisualMemoryStart";
import VisualMemoryChoose from "./components/VisualMemoryChoose/VisualMemoryChoose";
import VisualMemoryResult from "./components/VisualMemoryResult/VisualMemoryResult";
import { useRoomFields } from "@/src/hooks/useRoomFields";
import { editPlayer } from "@/src/lib/editPlayer";
import { editScore } from "@/src/lib/editScore";
import { quizMemories } from "@/src/data/quizMemories";

import { QuizMemories, GamePhase } from "@/src/types/types";

interface VisualMemoryGameRoomProps {
  roomId: string;
  userId: string;
}

function VisualMemoryGameRoom({ roomId, userId }: VisualMemoryGameRoomProps) {
  const [standartMemory, setStandartMemory] = useState<QuizMemories[]>([
    ...quizMemories,
  ]);
  const [resultMemory, setResultMemory] = useState<QuizMemories[]>([]);

  const memoryGame = useRoomFields({
    roomId: roomId,
    key: "memoryGame",
  }) as {
    items: QuizMemories[];
  } | null;

  const gamePhase: GamePhase | null = useRoomFields({
    roomId: roomId,
    key: "gamePhase",
  });

  let score = 0;

  resultMemory.forEach((obj, i) => {
    if (obj.id === memoryGame?.items[i].id) {
      score += 100;
    }
  });

  useEffect(() => {
    if (gamePhase !== GamePhase.MEMORY_ANSWER) return;
    if (score === 0) return;

    editPlayer({
      roomId: roomId,
      player: userId,
      key: "currentScore",
      value: score,
    });

    editScore({
      roomId: roomId,
      userId: userId,
      score: score,
    });
  }, [gamePhase, roomId, userId, score]);

  if (!memoryGame) return null;

  const handleChoiseElement = (object: QuizMemories) => {
    setResultMemory((prevState) => {
      return [...prevState, object];
    });
    setStandartMemory((prevState) => {
      const othersItems = prevState.filter((item) => item.id !== object.id);
      return othersItems;
    });
  };

  return (
    <>
      {gamePhase === GamePhase.MEMORY && (
        <VisualMemoryStart memoryGame={memoryGame} />
      )}
      {gamePhase === GamePhase.MEMORY_CHOOSE && (
        <VisualMemoryChoose
          roomId={roomId}
          resultMemory={resultMemory}
          standartMemory={standartMemory}
          handleChoiseElement={handleChoiseElement}
        />
      )}
      {gamePhase === GamePhase.MEMORY_ANSWER && (
        <VisualMemoryResult
          memoryGame={memoryGame}
          resultMemory={resultMemory}
          score={score / 100 || 0}
        />
      )}
    </>
  );
}

export default VisualMemoryGameRoom;
