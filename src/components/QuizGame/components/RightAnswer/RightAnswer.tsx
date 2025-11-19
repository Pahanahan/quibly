import styles from "./RightAnswer.module.scss";

interface RightAnswerProps {
  rightAnswer: string;
}

function RightAnswer({ rightAnswer }: RightAnswerProps) {
  return (
    <div className={styles.right}>
      <span>Правильный ответ: </span>
      {rightAnswer}
    </div>
  );
}

export default RightAnswer;
