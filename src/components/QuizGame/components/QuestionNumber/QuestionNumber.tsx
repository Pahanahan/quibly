import { translateCategory } from "./translateCategory";

import styles from "./QuestionNumber.module.scss";

interface QuestionNumberProps {
  category: string;
}

function QuestionNumber({ category }: QuestionNumberProps) {
  const categoryRus = translateCategory(category) || "";

  return <div className={styles.title}>Категория: {categoryRus}</div>;
}

export default QuestionNumber;
