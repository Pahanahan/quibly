import Image from "next/image";

import { QuizMemories } from "@/src/types/types";
import styles from "./VisualMemoryStart.module.scss";

interface VisualMemoryStartProps {
  memoryGame: { items: QuizMemories[] } | null;
}

function VisualMemoryStart({ memoryGame }: VisualMemoryStartProps) {
  if (!memoryGame) return null;

  const startMemoryElements = memoryGame.items.map((item) => (
    <div key={item.id} className={styles["memory__item-start"]}>
      <Image src={item.name} width={30} height={30} alt="icon" />
      <div className={styles["memory__item-name"]}>{item.rusName}</div>
    </div>
  ));

  return (
    <div className={styles.memory}>
      <h2 className={styles.memory__title}>Запомните последовательность</h2>
      <div className={styles.memory__items}>{startMemoryElements}</div>
    </div>
  );
}

export default VisualMemoryStart;
