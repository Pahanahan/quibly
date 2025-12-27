import { useState } from "react";

import { quizObstructions } from "@/src/data/quizObstructions";

import styles from "./ObstructionElements.module.scss";

interface ObstructionElementsProps {
  activeBtnObstruction: string | null;
  handleChooseObstruction: (arg1: string, arg2: string) => void;
}

function ObstructionElements({
  activeBtnObstruction,
  handleChooseObstruction,
}: ObstructionElementsProps) {
  const [randomChances] = useState(() =>
    quizObstructions.map(() => Math.random())
  );

  const obstructionsElement = quizObstructions.map((obstruction, i) => {
    const className = `${styles.obstruction__item} ${
      activeBtnObstruction === obstruction.name
        ? styles["obstruction__item--active"]
        : ""
    }`;

    if (
      obstruction.name !== "x2" &&
      obstruction.name !== "x5" &&
      obstruction.name !== "x10" &&
      randomChances[i] > 0.5
    ) {
      return (
        <button
          onClick={() =>
            handleChooseObstruction(obstruction.name, obstruction.rusName)
          }
          type="button"
          key={obstruction.id}
          className={className}
        >
          {obstruction.rusName}
        </button>
      );
    } else if (
      obstruction.name === "x2" &&
      randomChances[i] >= 0.75 &&
      randomChances[i] < 0.9
    ) {
      return (
        <button
          onClick={() =>
            handleChooseObstruction(obstruction.name, obstruction.rusName)
          }
          type="button"
          key={obstruction.id}
          className={className}
        >
          {obstruction.rusName}
        </button>
      );
    } else if (
      obstruction.name === "x5" &&
      randomChances[i] >= 0.9 &&
      randomChances[i] < 0.98
    ) {
      return (
        <button
          onClick={() =>
            handleChooseObstruction(obstruction.name, obstruction.rusName)
          }
          type="button"
          key={obstruction.id}
          className={className}
        >
          {obstruction.rusName}
        </button>
      );
    } else if (obstruction.name === "x10" && randomChances[i] >= 0.98) {
      return (
        <button
          onClick={() =>
            handleChooseObstruction(obstruction.name, obstruction.rusName)
          }
          type="button"
          key={obstruction.id}
          className={className}
        >
          {obstruction.rusName}
        </button>
      );
    } else {
      return;
    }
  });

  return <div className={styles.obstruction}>{obstructionsElement}</div>;
}

export default ObstructionElements;
