import { useEffect } from "react";
import Image from "next/image";

import { usePlayers } from "@/src/hooks/usePlayers";
import { avatars } from "@/src/lib/avatars";

import { MemScoreText } from "@/src/types/types";
import styles from "./RightAnswer.module.scss";

interface RightAnswerProps {
  rightAnswer?: string;
  roomId: string | null;
  title: string;
  setMemScoreText: React.Dispatch<
    React.SetStateAction<"highScore" | "zeroScore" | "normal">
  >;
}

function RightAnswer({
  rightAnswer,
  roomId,
  title,
  setMemScoreText,
}: RightAnswerProps) {
  const players = usePlayers({ roomId: roomId ?? undefined });

  let typeOfMem: MemScoreText = "normal";

  players.forEach((player) => {
    if (player.currentScore >= 1000) {
      typeOfMem = "highScore";
    }
  });

  let totalScoreZero = 0;

  players.forEach((player) => {
    totalScoreZero += player.currentScore;
  });

  if (totalScoreZero === 0) {
    typeOfMem = "zeroScore";
  }

  useEffect(() => {
    setMemScoreText(typeOfMem);
  }, [setMemScoreText, typeOfMem]);

  const playersScoreElement =
    players &&
    Object.entries(players)
      .sort((a, b) => b[1].score - a[1].score)
      .map((player) => {
        return (
          <div key={player[0]} className={styles.right__user}>
            <Image
              src={avatars[player[1].avatar]}
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
        <span>{title}</span>
        {rightAnswer && rightAnswer}
      </div>
      <div className={styles.right__players}>{playersScoreElement}</div>
    </div>
  );
}

export default RightAnswer;
