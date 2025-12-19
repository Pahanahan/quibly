import styles from "./GameAnswer.module.scss";

interface GameAnswerProps {
  rightAnswer: string;
  rightAnswerState: boolean | "нет ответа";
}

function GameAnswer({ rightAnswer, rightAnswerState }: GameAnswerProps) {
  return (
    <div className={styles.right}>
      <h2>
        Правильный ответ: <span>{rightAnswer}</span>
      </h2>
      {rightAnswerState === true ? (
        <div className={styles["right__message--right"]}>Вы ответили верно</div>
      ) : rightAnswerState === "нет ответа" ? (
        <div className={styles["right__message--wrong"]}>Вы не ответили</div>
      ) : (
        <div className={styles["right__message--wrong"]}>
          Ваш ответ неправильный
        </div>
      )}
    </div>
  );
}

export default GameAnswer;
