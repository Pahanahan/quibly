import Image from "next/image";

import { useRoomFields } from "@/src/hooks/useRoomFields";

import { QuizMemories } from "@/src/types/types";
import styles from "./VisualMemoryLevel.module.scss";

interface VisualMemoryLevelProps {
  roomId: string | null;
}

function VisualMemoryLevel({ roomId }: VisualMemoryLevelProps) {
  const memoryGame = useRoomFields({
    roomId: roomId,
    key: "memoryGame",
  }) as {
    items: QuizMemories[];
  } | null;

  if (!memoryGame) return null;

  const memoryElements = memoryGame.items.map((item: QuizMemories) => (
    <div key={item.id} className={styles.memory__item}>
      <Image src={item.name} width={100} height={100} alt="icon" />
      <div className={styles["memory__item-name"]}>{item.rusName}</div>
    </div>
  ));

  return (
    <div className={styles.memory}>
      <h2 className={styles.memory__title}>Запомните последовательность</h2>
      <div className={styles.memory__items}>{memoryElements}</div>
    </div>
  );
}

export default VisualMemoryLevel;
