import Image from "next/image";

import { generateCorrectText } from "./generateCorrectText";

import { QuizMemories } from "@/src/types/types";
import styles from "./VisualMemoryResult.module.scss";

interface VisualMemoryResultProps {
  memoryGame: { items: QuizMemories[] } | null;
  resultMemory: QuizMemories[];
  score: number;
}

function VisualMemoryResult({
  memoryGame,
  resultMemory,
  score,
}: VisualMemoryResultProps) {
  if (!memoryGame) return null;

  const finishMemoryElement = resultMemory.map((item, i) => {
    const cssClass =
      item.id === memoryGame.items[i].id ? styles.correct : styles.incorrect;

    return (
      <div
        key={item.id}
        className={`${styles["memory__item-start"]} ${cssClass}`}
      >
        <Image src={item.name} width={30} height={30} alt="icon" />
        <div className={styles["memory__item-name"]}>{item.rusName}</div>
      </div>
    );
  });

  return (
    <div className={styles.memory}>
      <h2 className={styles.memory__title}>
        На своих местах {score} {generateCorrectText(score)}
      </h2>
      <div className={styles.memory__items}>{finishMemoryElement}</div>
    </div>
  );
}

export default VisualMemoryResult;
