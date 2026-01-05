import { useState, useEffect } from "react";
import Image from "next/image";

import { useRoomFields } from "@/src/hooks/useRoomFields";
import { QuizMemories } from "@/src/types/types";

import styles from "./VisualMemoryLevel.module.scss";

interface VisualMemoryLevelProps {
  roomId: string | null;
}

function VisualMemoryLevel({ roomId }: VisualMemoryLevelProps) {
  const [memoryState, setMemoryState] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setMemoryState(false);
    }, 7000);
  }, []);

  const memoryGame = useRoomFields({
    roomId: roomId,
    key: "memoryGame",
  }) as {
    items: QuizMemories[];
    result: string[];
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
      {memoryState && (
        <>
          <h2 className={styles.memory__title}>Запомните последовательность</h2>
          <div className={styles.memory__items}>{memoryElements}</div>
        </>
      )}
      {!memoryState && (
        <h2 className={styles.memory__title}>
          Выберите изображения в правильном порядке
        </h2>
      )}
    </div>
  );
}

export default VisualMemoryLevel;
