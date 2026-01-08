import { useEffect, useState, useRef } from "react";

import VisualMemoryStart from "./components/VisualMemoryStart/VisualMemoryStart";
import VisualMemoryChoose from "./components/VisualMemoryChoose/VisualMemoryChoose";
import VisualMemoryResult from "./components/VisualMemoryResult/VisualMemoryResult";
import { useRoomFields } from "@/src/hooks/useRoomFields";
import { usePlayer } from "@/src/hooks/usePlayer";
import { editPlayer } from "@/src/lib/editPlayer";
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

  const player = usePlayer({ roomId: roomId, userId: userId });
  const playerScore = player?.score || 0;
  let score = 0;

  resultMemory.forEach((obj, i) => {
    if (obj.id === memoryGame?.items[i].id) {
      score += 100;
    }
  });

  const scoreRef = useRef(score);
  const playerScoreRef = useRef(playerScore);

  useEffect(() => {
    scoreRef.current = score;
  }, [score]);

  useEffect(() => {
    playerScoreRef.current = playerScore;
  }, [playerScore]);

  useEffect(() => {
    if (gamePhase !== GamePhase.MEMORY_ANSWER || resultMemory.length === 0)
      return;

    const totalScore = playerScoreRef.current + scoreRef.current;

    editPlayer({
      roomId: roomId,
      player: userId,
      key: "currentScore",
      value: scoreRef.current,
    });
    editPlayer({
      roomId: roomId,
      player: userId,
      key: "score",
      value: totalScore,
    });
  }, [roomId, userId, gamePhase, resultMemory.length]);

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
