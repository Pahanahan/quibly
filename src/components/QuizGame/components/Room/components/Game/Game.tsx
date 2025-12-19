import { useEffect, useState } from "react";

import { getDateNow } from "@/src/lib/getDateNow";
import { editPlayer } from "@/src/lib/editPlayer";
import { usePlayer } from "./usePlayer";

import styles from "./Game.module.scss";
import GameQuestion from "./components/GameQuestion/GameQuestion";
import GameAnswer from "./components/GameAnswer/GameAnswer";

interface GameProps {
  roomId: string;
  userId: string;
  question: string;
  answers: string[];
  rightAnswer: string;
}

function Game({ roomId, userId, question, answers, rightAnswer }: GameProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [time, setTime] = useState<number>(100);
  const [startTime, setStartTime] = useState<number>(0);
  const [rightAnswerState, setRightAnswerState] = useState<
    boolean | "нет ответа"
  >("нет ответа");

  const player = usePlayer({ roomId: roomId, userId: userId });

  const obstructions = player?.obstructions;
  const obstructionsArr = obstructions ? Object.values(obstructions) : [];

  useEffect(() => {
    setTimeout(() => {
      setStartTime(getDateNow());
    }, 0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime((prev) => {
        return (prev -= 10);
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  const handleChooseAnswer = (answer: string) => {
    setSelectedAnswer(answer);

    const isRight = answer === rightAnswer;
    setRightAnswerState(isRight);

    const endTime = getDateNow();

    const differentTime = endTime - startTime;

    const score = isRight ? Math.floor(500000 / differentTime + 100) : 0;

    const playerScore = player?.score || 0;

    const totalScore = playerScore + score;

    editPlayer({
      roomId: roomId,
      player: userId,
      key: "score",
      value: totalScore,
    });

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
      {time > -10 && (
        <GameQuestion
          question={question}
          handleChooseAnswer={handleChooseAnswer}
          selectedAnswer={selectedAnswer}
          answers={answers}
          time={time}
          obstructionsArr={obstructionsArr}
        />
      )}
      {time <= -10 && (
        <GameAnswer
          rightAnswer={rightAnswer}
          rightAnswerState={rightAnswerState}
        />
      )}
    </div>
  );
}

export default Game;
