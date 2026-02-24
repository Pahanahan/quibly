import { useEffect } from "react";

import { useWords } from "./useWords";
import { quizMusic } from "@/src/lib/quizMusic";
import { quizRounds } from "@/src/data/quizRounds";

import styles from "./Words.module.scss";

interface WordsProps {
  roomId: string | null;
  currentRound: number;
}

function Words({ roomId, currentRound }: WordsProps) {
  useEffect(() => {
    const music = quizMusic("/quiz-sound/tick-tock-timer.wav", true, 0.5);

    music.play();

    return () => {
      music.stop();
    };
  }, []);

  const words = useWords({ roomId: roomId ?? undefined });

  if (words.length === 0) {
    return null;
  }

  const title = words[quizRounds[currentRound]?.dataIndex || 0].title || "";
  const letters = words[quizRounds[currentRound]?.dataIndex || 0].letters || [];

  const letterElements = letters.map((item, i) => {
    return (
      <div key={i} className={styles.words__item}>
        {item}
      </div>
    );
  });

  return (
    <div className={styles.words}>
      <h2 className={styles.words__title}>{title}</h2>
      <div className={styles.words__items}>{letterElements}</div>
    </div>
  );
}

export default Words;
