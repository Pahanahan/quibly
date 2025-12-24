import { useEffect, useState } from "react";

import GameQuestion from "./components/GameQuestion/GameQuestion";
import GameAnswer from "./components/GameAnswer/GameAnswer";
import { editPlayer } from "@/src/lib/editPlayer";
import { useRoomFields } from "@/src/hooks/useRoomFields";
import { usePlayer } from "@/src/hooks/usePlayer";
import { getDateNow } from "@/src/lib/getDateNow";

import styles from "./Game.module.scss";

interface GameProps {
  roomId: string;
  userId: string;
  question: string;
  answers: string[];
  rightAnswer: string;
}

function Game({ roomId, userId, question, answers, rightAnswer }: GameProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [rightAnswerState, setRightAnswerState] = useState<
    boolean | "нет ответа"
  >("нет ответа");
  const [score, setScore] = useState<number>(0);
  const [time, setTime] = useState<number>(100);
  const [stopTimer, setStopTimer] = useState<boolean>(false);

  const player = usePlayer({ roomId: roomId, userId: userId });

  const obstructions = player?.obstructions;
  const obstructionsArr = obstructions ? Object.values(obstructions) : [];

  const dateNow = getDateNow();

  const startTime: number =
    useRoomFields({
      roomId: roomId,
      key: "startTimeRound",
    }) || dateNow;

  useEffect(() => {
    const timer = setInterval(() => {
      if (stopTimer) return;

      if (time > 0) {
        const differentTime = (startTime + 10000 - Date.now()) / 100;
        setTime(differentTime);
      }

      if (time <= 0) {
        setStopTimer(true);

        const playerScore = player?.score || 0;

        const totalScore = playerScore + score;

        editPlayer({
          roomId: roomId,
          player: userId,
          key: "score",
          value: totalScore,
        });
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [roomId, userId, startTime, player, score, time, stopTimer]);

  const handleChooseAnswer = (answer: string) => {
    setSelectedAnswer(answer);

    const isRight = answer === rightAnswer;
    setRightAnswerState(isRight);

    const endTime = Date.now();

    const differentTime = endTime - startTime;

    const score = isRight ? Math.floor(500000 / differentTime + 100) : 0;

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
      {!stopTimer && (
        <GameQuestion
          roomId={roomId}
          question={question}
          handleChooseAnswer={handleChooseAnswer}
          selectedAnswer={selectedAnswer}
          answers={answers}
          obstructionsArr={obstructionsArr}
        />
      )}
      {stopTimer && (
        <GameAnswer
          rightAnswer={rightAnswer}
          rightAnswerState={rightAnswerState}
        />
      )}
    </div>
  );
}

export default Game;
