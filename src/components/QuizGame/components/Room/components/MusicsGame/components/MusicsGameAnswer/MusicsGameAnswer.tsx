import styles from "./MusicsGameAnswer.module.scss";

interface MusicsGameQuestionProps {
  rightAnswerMusic: string;
  rightAnswerState: boolean | "нет ответа";
}

function MusicsGameAnswer({
  rightAnswerMusic,
  rightAnswerState,
}: MusicsGameQuestionProps) {
  return (
    <div className={styles["musics-answer"]}>
      <h2>
        Правильный ответ: <span>{rightAnswerMusic}</span>
      </h2>
      {rightAnswerState === true ? (
        <div className={styles["musics-answer__message--right"]}>
          Вы ответили верно
        </div>
      ) : rightAnswerState === "нет ответа" ? (
        <div className={styles["musics-answer__message--wrong"]}>
          Вы не ответили
        </div>
      ) : (
        <div className={styles["musics-answer__message--wrong"]}>
          Ваш ответ неправильный
        </div>
      )}
    </div>
  );
}

export default MusicsGameAnswer;
