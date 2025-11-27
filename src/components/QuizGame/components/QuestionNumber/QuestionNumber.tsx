import styles from "./QuestionNumber.module.scss";

interface QuestionNumberProps {
  currentQuestion: number;
}

function QuestionNumber({ currentQuestion }: QuestionNumberProps) {
  return <div className={styles.title}>Вопрос №{currentQuestion + 1}</div>;
}

export default QuestionNumber;
