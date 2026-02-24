import ToolBarGame from "../../../ToolBarGame/ToolBarGame";

import styles from "./WordsGameQuestion.module.scss";

interface WordsGameQuestionProps {
  roomId: string;
  title: string;
  letters: string[];
  answers: string[];
  handleAddWord: (word: string[]) => void;
  selectedIndexes: number[];
  handleAddLetter: (index: number) => void;
  handleRemoveLetter: (index: number) => void;
  error: string;
}

function WordsGameQuestion({
  roomId,
  title,
  letters,
  answers,
  handleAddWord,
  selectedIndexes,
  handleAddLetter,
  handleRemoveLetter,
  error,
}: WordsGameQuestionProps) {
  const currentWord = selectedIndexes.map((i) => letters[i]);

  const letterElements = letters.map((letter, i) => {
    const isUsed = selectedIndexes.includes(i);

    return (
      <div
        onClick={() => handleAddLetter(i)}
        key={i}
        className={styles["words-question__letter"]}
        style={{
          opacity: isUsed ? 0.4 : 1,
          pointerEvents: isUsed ? "none" : "auto",
        }}
      >
        {letter}
      </div>
    );
  });

  const wordElements = selectedIndexes.map((i) => {
    return (
      <div
        onClick={() => handleRemoveLetter(i)}
        key={i}
        className={styles["words-question__letter--active"]}
      >
        {letters[i]}
      </div>
    );
  });

  const answerElements = answers.map((str) => {
    return (
      <div key={str} className={styles["words-question__list-item"]}>
        {str}{" "}
        <span>{str.length === 3 ? "+100" : `+${str.length * 50 - 50}`}</span>
      </div>
    );
  });

  return (
    <div className={styles["words-question"]}>
      <h2 className={styles["words-question__title"]}>{title}</h2>
      <div className={styles["words-question__letters"]}>{letterElements}</div>
      <div className={styles["words-question__letters"]}>{wordElements}</div>
      <div className={styles["words-question__error"]}>{error}</div>
      <button
        onClick={() => handleAddWord(currentWord)}
        className={styles["words-question__btn"]}
        type="button"
      >
        Составить слово
      </button>
      <div className={styles["words-question__list"]}>{answerElements}</div>
      <ToolBarGame roomId={roomId} multiplicator={2} />
    </div>
  );
}

export default WordsGameQuestion;
