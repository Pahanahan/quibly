import styles from "./MoviesGameAnswer.module.scss";

interface MoviesGameQuestionProps {
  rightAnswerMovie: string;
  rightAnswerState: boolean | "нет ответа";
}

function MoviesGameAnswer({
  rightAnswerMovie,
  rightAnswerState,
}: MoviesGameQuestionProps) {
  return (
    <div className={styles["movies-answer"]}>
      <h2>
        Правильный ответ: <span>{rightAnswerMovie}</span>
      </h2>
      {rightAnswerState === true ? (
        <div className={styles["movies-answer__message--right"]}>
          Вы ответили верно
        </div>
      ) : rightAnswerState === "нет ответа" ? (
        <div className={styles["movies-answer__message--wrong"]}>
          Вы не ответили
        </div>
      ) : (
        <div className={styles["movies-answer__message--wrong"]}>
          Ваш ответ неправильный
        </div>
      )}
    </div>
  );
}

export default MoviesGameAnswer;
