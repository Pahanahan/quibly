import { useState, useEffect, useRef } from "react";

import SortingDragged from "./components/SortingDragged/SortingDragged";
import SortingAnswer from "./components/SortingAnswer/SortingAnswer";
import ToolBarGame from "../ToolBarGame/ToolBarGame";
import { useRoomFields } from "@/src/hooks/useRoomFields";
import { usePlayer } from "@/src/hooks/usePlayer";
import { editPlayer } from "@/src/lib/editPlayer";

import { GamePhase, QuizSorting, Variable } from "@/src/types/types";
import styles from "./SortingGame.module.scss";

interface SortingGameProps {
  roomId: string;
  userId: string;
  currentQuestionIndex: number | null;
}

function SortingGame({
  roomId,
  userId,
  currentQuestionIndex,
}: SortingGameProps) {
  const [sortingItems, setSortingItems] = useState<Variable[]>([]);
  const [draggedItem, setDraggedItem] = useState<Variable | null>(null);
  const [hoveredItem, setHoveredItem] = useState<Variable | null>(null);
  const [position, setPosition] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });

  const gamePhase: GamePhase | null = useRoomFields({
    roomId: roomId,
    key: "gamePhase",
  });

  const sortingObj = useRoomFields({ roomId: roomId, key: "sortingGame" }) as {
    items: QuizSorting[];
  } | null;

  const sortingItem = sortingObj?.items[currentQuestionIndex || 0];

  useEffect(() => {
    if (!sortingItem) return;

    setTimeout(() => {
      setSortingItems(
        sortingItem.variables.map((item, i) => ({
          ...item,
          order: i + 1,
        })),
      );
    }, 0);
  }, [sortingItem]);

  const player = usePlayer({ roomId: roomId, userId: userId });
  const playerScore = player?.score || 0;
  let score = 0;

  sortingItems.forEach((item) => {
    if (item.id === item.order) {
      score += 100;
    }
  });

  const scoreRef = useRef(score);
  const playerScoreRef = useRef(playerScore);

  useEffect(() => {
    scoreRef.current = score;
  }, [score]);

  useEffect(() => {
    playerScoreRef.current = playerScore;
  }, [playerScore]);

  useEffect(() => {
    if (gamePhase !== GamePhase.SORTING_ANSWER) return;

    const totalScore = playerScoreRef.current + scoreRef.current;

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
      value: totalScore,
    });
  }, [gamePhase, roomId, userId]);

  if (!sortingObj) return null;

  const swapItems = (dragged: Variable, target: Variable) => {
    setSortingItems((prevState) => {
      const result = [...prevState].map((item) => {
        if (item.id === dragged.id) {
          return { ...item, order: target.order };
        }

        if (item.id === target.id) {
          return { ...item, order: dragged.order };
        }

        return item;
      });

      return result;
    });
  };

  const onPointerDown = (
    item: Variable,
    e: React.PointerEvent<HTMLDivElement>,
  ) => {
    setDraggedItem(item);
    setHoveredItem(item);

    setPosition({ x: e.clientX, y: e.clientY });

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (draggedItem && hoveredItem && draggedItem.id !== hoveredItem.id) {
      swapItems(draggedItem, hoveredItem);
    }

    setDraggedItem(null);
    setHoveredItem(null);
    setPosition({ x: e.clientX, y: e.clientY });

    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggedItem) return;

    setPosition({ x: e.clientX, y: e.clientY });

    const target = document.elementFromPoint(e.clientX, e.clientY);
    if (!target) return;

    const itemElement = target.closest("[data-sort-id]");
    if (!itemElement) return;

    const targetId = itemElement.getAttribute("data-sort-id");
    if (!targetId) return;

    setHoveredItem(
      sortingItems.find((item) => String(item.id) === targetId) ?? null,
    );
  };

  const sortingElements = [...sortingItems]
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    .map((item) => {
      const className = `${styles.sorting__title} ${
        hoveredItem?.id === item.id ? styles.hover : ""
      }`;

      return (
        <div
          onPointerUp={(e) => onPointerUp(e)}
          onPointerDown={(e) => onPointerDown(item, e)}
          onPointerMove={(e) => onPointerMove(e)}
          key={item.id}
          data-sort-id={item.id}
          className={styles.sorting__item}
        >
          <div className={className}>{item.name}</div>
        </div>
      );
    });

  const draggedElement = draggedItem && (
    <SortingDragged
      top={position.y}
      left={position.x}
      name={draggedItem.name}
    />
  );

  return (
    <>
      {gamePhase === GamePhase.SORTING && (
        <div className={styles.sorting}>
          <h2 className={styles.sorting__question}>{sortingItem?.question}</h2>
          <div className={styles.sorting__items}>{sortingElements}</div>
          {draggedElement}
          <ToolBarGame roomId={roomId} multiplicator={2} />
        </div>
      )}
      {gamePhase === GamePhase.SORTING_ANSWER && (
        <SortingAnswer sortingItems={sortingItems} score={score / 100 || 0} />
      )}
    </>
  );
}

export default SortingGame;
