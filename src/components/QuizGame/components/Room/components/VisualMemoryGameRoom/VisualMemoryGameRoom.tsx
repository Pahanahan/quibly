import { useEffect, useState, useRef } from "react";
import Image from "next/image";

import { useRoomFields } from "@/src/hooks/useRoomFields";
import { usePlayer } from "@/src/hooks/usePlayer";
import { editPlayer } from "@/src/lib/editPlayer";
import { quizMemories } from "@/src/data/quizMemories";
import { generateCorrectText } from "./generateCorrectText";

import { QuizMemories } from "@/src/types/types";
import styles from "./VisualMemoryGameRoom.module.scss";

interface VisualMemoryGameRoomProps {
  roomId: string;
  userId: string;
}

function VisualMemoryGameRoom({ roomId, userId }: VisualMemoryGameRoomProps) {
  const [standartMemory, setStandartMemory] = useState<QuizMemories[]>([
    ...quizMemories,
  ]);
  const [memoryState, setMemoryState] = useState<string>("start");
  const [resultMemory, setResultMemory] = useState<QuizMemories[]>([]);

  const memoryGame = useRoomFields({
    roomId: roomId,
    key: "memoryGame",
  }) as {
    items: QuizMemories[];
    result: string[];
  } | null;

  const player = usePlayer({ roomId: roomId, userId: userId });
  const playerScore = player?.score || 0;
  let score = 0;

  resultMemory.forEach((obj, i) => {
    if (obj.id === memoryGame?.items[i].id) {
      score += 100;
    }
  });

  const scoreRef = useRef(score);
  const playerScoreRef = useRef(playerScore);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMemoryState("choice");
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    scoreRef.current = score;
  }, [score]);

  useEffect(() => {
    playerScoreRef.current = playerScore;
  }, [playerScore]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMemoryState("finish");

      editPlayer({
        roomId: roomId,
        player: userId,
        key: "currentScore",
        value: scoreRef.current,
      });
      editPlayer({
        roomId: roomId,
        player: userId,
        key: "score",
        value: playerScoreRef.current + scoreRef.current,
      });
    }, 17000);

    return () => clearTimeout(timer);
  }, [roomId, userId]);

  if (!memoryGame) return null;

  const handleChoiseElement = (object: QuizMemories) => {
    setResultMemory((prevState) => {
      return [...prevState, object];
    });
    setStandartMemory((prevState) => {
      const othersItems = prevState.filter((item) => item.id !== object.id);
      return othersItems;
    });
  };

  const startMemoryElements = memoryGame.items.map((item) => (
    <div key={item.id} className={styles["memory__item-start"]}>
      <Image src={item.name} width={30} height={30} alt="icon" />
      <div className={styles["memory__item-name"]}>{item.rusName}</div>
    </div>
  ));

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
    <>
      {memoryState === "start" && (
        <div className={styles.memory}>
          <h2 className={styles.memory__title}>Запомните последовательность</h2>
          <div className={styles.memory__items}>{startMemoryElements}</div>
        </div>
      )}
      {memoryState === "choice" && (
        <div className={styles.memory}>
          <h2 className={styles.memory__title}>
            Выберите изображения в правильном порядке
          </h2>
          <div className={styles.memory__items}>{memoryElements}</div>
          <div className={styles.memory__items}>{resultMemoryElement}</div>
        </div>
      )}
      {memoryState === "finish" && (
        <div className={styles.memory__answer}>
          <h2 className={styles.memory__title}>
            На своих местах {score / 100 || 0}{" "}
            {generateCorrectText(score / 100 || 0)}
          </h2>
          <div className={styles.memory__items}>{finishMemoryElement}</div>
        </div>
      )}
    </>
  );
}

export default VisualMemoryGameRoom;
