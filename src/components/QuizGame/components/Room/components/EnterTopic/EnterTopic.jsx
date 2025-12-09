import TopicBtn from "./components/TopicBtn";
import { quizCategories } from "@/src/data/quizCategories";

import styles from "./EnterTopic.module.scss";

function EnterTopic() {
  const quizCategoriesElements = quizCategories.map((category) => {
    return (
      <TopicBtn
        key={category.category}
        category={category.category}
        categoryRus={category.categoryRus}
      />
    );
  });

  return (
    <div className={styles.topic}>
      <h2 className={styles.topic__title}>Выберите понравившиеся темы</h2>
      <div className={styles.topic__items}>{quizCategoriesElements}</div>
      <button className={styles.topic__btn}>Выбрать</button>
    </div>
  );
}

export default EnterTopic;
