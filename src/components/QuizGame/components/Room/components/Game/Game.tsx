import { useEffect, useState, useRef } from "react";

import GameQuestion from "./components/GameQuestion/GameQuestion";
import GameAnswer from "./components/GameAnswer/GameAnswer";
import { editPlayer } from "@/src/lib/editPlayer";
import { useRoomFields } from "@/src/hooks/useRoomFields";
import { usePlayer } from "@/src/hooks/usePlayer";
import { getDateNow } from "@/src/lib/getDateNow";

import { GamePhase, ObstructionsObj } from "@/src/types/types";
import styles from "./Game.module.scss";

interface GameProps {
  roomId: string;
  userId: string;
  question: string;
  answers: string[];
  rightAnswer: string;
  gamePhase: GamePhase;
}

function Game({
  roomId,
  userId,
  question,
  answers,
  rightAnswer,
  gamePhase,
}: GameProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [rightAnswerState, setRightAnswerState] = useState<
    boolean | "нет ответа"
  >("нет ответа");
  const [score, setScore] = useState<number>(0);

  const player = usePlayer({ roomId: roomId, userId: userId });
  const scoreRef = useRef(score);
  const playerScore = useRef(0);

  useEffect(() => {
    scoreRef.current = score;
  }, [score]);

  useEffect(() => {
    playerScore.current = player?.score || 0;
  }, [player]);

  const obstructions: ObstructionsObj | undefined = player?.obstructions;

  const [x2, x5, x10] = [
    obstructions?.x2 ? 2 : 1,
    obstructions?.x5 ? 5 : 1,
    obstructions?.x10 ? 10 : 1,
  ];

  const dateNow = getDateNow();

  const startTime: number =
    useRoomFields({
      roomId: roomId,
      key: "startTimeRound",
    }) || dateNow;

  useEffect(() => {
    if (gamePhase !== GamePhase.ANSWER || selectedAnswer === null) return;

    const totalScore = scoreRef.current + playerScore.current;

    editPlayer({
      roomId: roomId,
      player: userId,
      key: "score",
      value: totalScore,
    });
  }, [roomId, userId, gamePhase, selectedAnswer]);

  const handleChooseAnswer = (answer: string) => {
    setSelectedAnswer(answer);

    const isRight = answer === rightAnswer;
    setRightAnswerState(isRight);

    const endTime = Date.now();

    const differentTime = endTime - startTime;

    const score = isRight
      ? Math.floor(500000 / differentTime + 100) * x2 * x5 * x10
      : 0;

    setScore(score);

    editPlayer({
      roomId: roomId,
      player: userId,
      key: "currentScore",
      value: score,
    });
  };

  if (!answers) {
    return (
      <div className={styles.game}>
        <h2 className={styles.game__question}>{question}</h2>
      </div>
    );
  }

  return (
    <div className={styles.game}>
      {gamePhase === GamePhase.QUESTION && (
        <GameQuestion
          roomId={roomId}
          question={question}
          handleChooseAnswer={handleChooseAnswer}
          selectedAnswer={selectedAnswer}
          answers={answers}
          obstructions={obstructions}
        />
      )}
      {gamePhase === GamePhase.ANSWER && (
        <GameAnswer
          rightAnswer={rightAnswer}
          rightAnswerState={rightAnswerState}
        />
      )}
    </div>
  );
}

export default Game;
