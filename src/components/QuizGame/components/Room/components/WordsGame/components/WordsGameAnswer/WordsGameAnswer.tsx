import styles from "./WordsGameAnswer.module.scss";

interface WordsGameAnswerProps {
  length: number;
}

function WordsGameAnswer({ length }: WordsGameAnswerProps) {
  return (
    <div className={styles["words-answer"]}>
      <h2>Правильно составленных слов {length}</h2>
    </div>
  );
}

export default WordsGameAnswer;
