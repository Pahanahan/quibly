import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { QuizPlayer } from "@/src/types/types";
import cat from "@/public/quiz-avatar/cat.svg";
import styles from "./EndGame.module.scss";

interface EndGameProps {
  roomId: string | null;
}

function EndGame({ roomId }: EndGameProps) {
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
      .map((player) => {
        return (
          <div key={player[0]} className={styles.end__user}>
            <Image
              src={cat}
              width={40}
              height={40}
              alt="animal"
              className={styles.end__avatar}
            />
            <div className={styles.end__name}>{player[1].userName}:</div>
            <div className={styles["end__total-score"]}>
              {player[1].score}
              <span>очков</span>
            </div>
          </div>
        );
      });

  return (
    <div className={styles.end}>
      <div className={styles.end__text}>Игра окончена!</div>
      <div className={styles.end__users}>{playersScoreElement}</div>
      <Link href="/" className={styles.end__back}>
        Назад в Меню
      </Link>
    </div>
  );
}

export default EndGame;
