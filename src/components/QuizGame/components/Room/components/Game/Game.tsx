import { useState } from "react";

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
  const [oneTry, setOneTry] = useState<boolean>(true);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const player = usePlayer({ roomId: roomId, userId: userId });

  const startTime = getDateNow();

  const handleChooseAnswer = (answer: string) => {
    if (!oneTry) return;

    setSelectedAnswer(answer);

    const isCorrect = answer === rightAnswer;

    const endTime = getDateNow();

    const differentTime = endTime - startTime;

    const score = isCorrect ? Math.floor(500000 / differentTime + 100) : 0;

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

    setOneTry(false);
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

    const className = oneTry
      ? styles.game__answer
      : `${styles.game__answer} ${activeAnswer ? styles.chosen : ""}`;

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
      <h2 className={styles.game__question}>{question}</h2>
      <div className={styles.game__answers}>{answersElements}</div>
    </div>
  );
}

export default Game;
