import Image from "next/image";

import ToolBarGame from "../../../ToolBarGame/ToolBarGame";

import { QuizMemories } from "@/src/types/types";
import styles from "./VisualMemoryChoose.module.scss";

interface VisualMemoryChooseProps {
  roomId: string;
  resultMemory: QuizMemories[];
  standartMemory: QuizMemories[];
  handleChoiseElement: (obj: QuizMemories) => void;
}

function VisualMemoryChoose({
  roomId,
  resultMemory,
  standartMemory,
  handleChoiseElement,
}: VisualMemoryChooseProps) {
  const memoryElements = standartMemory.map((item) => (
    <div
      onClick={() => handleChoiseElement(item)}
      key={item.id}
      className={styles.memory__item}
    >
      <Image src={item.name} width={30} height={30} alt="icon" />
      <div className={styles["memory__item-name"]}>{item.rusName}</div>
    </div>
  ));

  const resultMemoryElement = resultMemory.map((item) => (
    <div key={item.id} className={styles["memory__item-start"]}>
      <Image src={item.name} width={30} height={30} alt="icon" />
      <div className={styles["memory__item-name"]}>{item.rusName}</div>
    </div>
  ));

  return (
    <div className={styles.memory}>
      <h2 className={styles.memory__title}>
        Выберите изображения в правильном порядке
      </h2>
      <div className={styles.memory__items}>{memoryElements}</div>
      <div className={styles.memory__items}>{resultMemoryElement}</div>
      <ToolBarGame roomId={roomId} />
    </div>
  );
}

export default VisualMemoryChoose;
