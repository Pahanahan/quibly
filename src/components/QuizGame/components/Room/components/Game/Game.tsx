import { useEffect, useState } from "react";

import { getDateNow } from "@/src/lib/getDateNow";
import { editPlayer } from "@/src/lib/editPlayer";
import { usePlayer } from "@/src/hooks/usePlayer";

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
  const [time, setTime] = useState<number>(100);
  const [startTime, setStartTime] = useState<number>(0);
  console.log(time);

  const player = usePlayer({ roomId: roomId, userId: userId });

  useEffect(() => {
    setTimeout(() => {
      setStartTime(getDateNow());
    }, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setTime((prev) => {
        return (prev -= 10);
      });
    }, 1000);
  }, [time]);

  const handleChooseAnswer = (answer: string) => {
    setSelectedAnswer(answer);

    const isCorrect = answer === rightAnswer;

    const endTime = getDateNow();

    const differentTime = endTime - startTime;

    const score =
      isCorrect && differentTime < 12000
        ? Math.floor(500000 / differentTime + 100)
        : 0;

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

  const answersElements = answers.map((answer) => {
    const activeAnswer = answer === selectedAnswer;

    const className = `${styles.game__answer} ${
      activeAnswer ? styles.chosen : ""
    }`;

    return (
      <div
        onClick={() => handleChooseAnswer(answer)}
        key={answer}
        className={className}
      >
        {answer}
      </div>
    );
  });

  return (
    <div className={styles.game}>
      {time > -10 && (
        <div>
          <h2 className={styles.game__question}>{question}</h2>
          <div className={styles.game__answers}>{answersElements}</div>
          <div className={styles.game__bar}>
            <div
              style={{ width: `${time}%` }}
              className={styles["game__bar--active"]}
            ></div>
          </div>
        </div>
      )}
      {time <= -10 && (
        <div className={styles.game__right}>
          Правильный ответ: <span>{rightAnswer}</span>
        </div>
      )}
    </div>
  );
}

export default Game;
