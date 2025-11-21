import { useState, useEffect } from "react";
import Image from "next/image";

import type { QuizPlayer } from "@/src/types/types";
import cat from "@/public/quiz-avatar/cat.svg";
import styles from "./RightAnswer.module.scss";

interface RightAnswerProps {
  rightAnswer: string;
  roomId: string | undefined;
}

function RightAnswer({ rightAnswer, roomId }: RightAnswerProps) {
  const [players, setPlayers] = useState<QuizPlayer[] | null>(null);

  useEffect(() => {
    const getRoom = async () => {
      try {
        const response = await fetch(
          `https://quizgame-30deb-default-rtdb.firebaseio.com/rooms/${roomId}.json`
        );

        if (!response.ok) throw new Error("Ошибка");

        const data = await response.json();
        const players: QuizPlayer[] = data.players;

        setPlayers(players);
      } catch (error) {
        console.error(error);
      }
    };

    getRoom();
  }, [roomId]);

  const playersScoreElement =
    players &&
    Object.entries(players)
      .sort((a, b) => b[1].score - a[1].score)
      .filter((player) => !player[1].isFake)
      .map((player) => {
        console.log(player);
        return (
          <div key={player[1].id} className={styles.right__user}>
            <Image
              src={cat}
              width={30}
              height={30}
              alt="animal"
              className={styles.right__avatar}
            />
            <div className={styles.right__name}>{player[1].userName}:</div>
            <div className={styles.right__score}>{player[1].score}</div>
          </div>
        );
      });

  return (
    <div className={styles.right}>
      <div className={styles.right__answer}>
        <span>Правильный ответ: </span>
        {rightAnswer}
      </div>
      <div className={styles.right__players}>{playersScoreElement}</div>
    </div>
  );
}

export default RightAnswer;
