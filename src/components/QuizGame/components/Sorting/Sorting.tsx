import { useEffect } from "react";

import { useRoomFields } from "@/src/hooks/useRoomFields";
import { quizMusic } from "@/src/lib/quizMusic";

import { QuizSorting } from "@/src/types/types";
import styles from "./Sorting.module.scss";

interface SortingProps {
  roomId: string | null;
}

interface SortingObj {
  items: QuizSorting[];
}

function Sorting({ roomId }: SortingProps) {
  useEffect(() => {
    const music = quizMusic("/quiz-sound/tick-tock-timer.wav", true, 0.7);

    music.play();

    return () => {
      music.stop();
    };
  }, []);

  const sortingObj: SortingObj | null = useRoomFields({
    roomId: roomId,
    key: "sortingGame",
  }) as {
    items: QuizSorting[];
  } | null;

  if (!sortingObj) return null;

  const sortingItem = sortingObj?.items[0];

  const sortingElements = sortingItem.variables.map((item) => {
    return (
      <div key={item.id} className={styles.sorting__item}>
        {item.name}
      </div>
    );
  });

  return (
    <div className={styles.sorting}>
      <h2 className={styles.sorting__title}>{sortingItem.question}</h2>
      <div className={styles.sorting__items}>{sortingElements}</div>
    </div>
  );
}

export default Sorting;
