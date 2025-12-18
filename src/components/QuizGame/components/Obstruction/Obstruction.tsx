import { quizObstructions } from "@/src/data/quizObstructions";

import styles from "./Obstruction.module.scss";

function Obstruction() {
  const quizObstructionElements = quizObstructions.map((item) => {
    return (
      <div key={item.id} className={styles.obstruction__item}>
        {item.name}
      </div>
    );
  });

  return (
    <div className={styles.obstruction}>
      <h2 className={styles.obstruction__title}>Создайте препятсвие игрокам</h2>
      <div className={styles.obstruction__items}>{quizObstructionElements}</div>
    </div>
  );
}

export default Obstruction;
