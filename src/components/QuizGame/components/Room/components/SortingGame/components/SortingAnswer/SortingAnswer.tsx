import { generateCorrectSortingText } from "./generateCorrectSortingText";

import { Variable } from "@/src/types/types";
import styles from "./SortingAnswer.module.scss";

interface SortingAnswerProps {
  sortingItems: Variable[];
  score: number;
}

function SortingAnswer({ sortingItems, score }: SortingAnswerProps) {
  const finishSortingElements = sortingItems
    .sort((a, b) => a.order! - b.order!)
    .map((item) => {
      if (item.id === item.order) {
        return (
          <div key={item.id} className={styles.correct}>
            {item.name}
          </div>
        );
      } else {
        return (
          <div key={item.id} className={styles.incorrect}>
            {item.name}
          </div>
        );
      }
    });

  return (
    <div className={styles["sorting-answer"]}>
      <h2 className={styles["sorting-answer__title"]}>
        На своих местах {score} {generateCorrectSortingText(score)}
      </h2>
      <div className={styles["sorting-answer__items"]}>
        {finishSortingElements}
      </div>
    </div>
  );
}

export default SortingAnswer;
