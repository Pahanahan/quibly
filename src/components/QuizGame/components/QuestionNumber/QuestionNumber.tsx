import { translateCategory } from "@/src/lib/utils/translateCategory";

import styles from "./QuestionNumber.module.scss";

interface QuestionNumberProps {
  currentQuestion: number;
  category: string;
}

function QuestionNumber({ currentQuestion, category }: QuestionNumberProps) {
  const categoryRus = translateCategory(category) || "";

  return (
    <div className={styles.title}>
      <div>Вопрос №{currentQuestion + 1}</div>
      <div>Категория: {categoryRus}</div>
    </div>
  );
}

export default QuestionNumber;
