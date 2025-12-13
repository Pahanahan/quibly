import { useState } from "react";

import TopicBtn from "./components/TopicBtn";
import { editTopics } from "./editTopics";
import { quizCategories } from "@/src/data/quizCategories";

import { StepGame } from "@/src/types/types";
import styles from "./EnterTopic.module.scss";

interface EnterTopicProps {
  roomId: string;
  setStepGame: React.Dispatch<React.SetStateAction<StepGame>>;
}

function EnterTopic({ roomId, setStepGame }: EnterTopicProps) {
  const [topicsState, setTopicsState] = useState<string[]>([]);

  const handleSetTopics = () => {
    setStepGame(StepGame.READY);

    topicsState.forEach((item) => {
      editTopics({
        roomId: roomId || null,
        key: item,
        value: item,
      });
    });
  };

  const disabled = topicsState.length === 0;

  const quizCategoriesElements = quizCategories.map((category) => {
    return (
      <TopicBtn
        topicsState={topicsState}
        setTopicsState={setTopicsState}
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
      <button
        onClick={handleSetTopics}
        type="button"
        disabled={disabled}
        className={styles.topic__btn}
      >
        Выбрать
      </button>
    </div>
  );
}

export default EnterTopic;
