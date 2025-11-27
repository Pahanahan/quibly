import { useState, useEffect } from "react";
import Image from "next/image";

// import { useRoom } from "@/src/hooks/useRoom";

import type { QuizPlayer } from "@/src/types/types";
import cat from "@/public/quiz-avatar/cat.svg";
import styles from "./RightAnswer.module.scss";

interface RightAnswerProps {
  rightAnswer: string;
  roomId: string | null;
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

  // const room = useRoom({ roomId: roomId });

  const playersScoreElement =
    players &&
    Object.entries(players)
      .sort((a, b) => b[1].score - a[1].score)
      .map((player) => {
        return (
          <div key={player[0]} className={styles.right__user}>
            <Image
              src={cat}
              width={40}
              height={40}
              alt="animal"
              className={styles.right__avatar}
            />
            <div className={styles.right__name}>{player[1].userName}:</div>
            <div className={styles["right__total-score"]}>
              {player[1].score}
              <span>очков</span>
            </div>
            <div className={styles.right__score}>
              +{player[1].currentScore}
              <span>очков</span>
            </div>
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
