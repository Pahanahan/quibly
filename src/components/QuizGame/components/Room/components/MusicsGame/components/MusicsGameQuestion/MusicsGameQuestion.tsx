import ToolBarGame from "../../../ToolBarGame/ToolBarGame";

import styles from "./MusicsGameQuestion.module.scss";

interface MusicsGameQuestionProps {
  roomId: string;
  questionMusic: string;
  handleChooseAnswer: (answer: string) => void;
  selectedAnswer: string | null;
  answersMusic: string[];
}

function MusicsGameQuestion({
  roomId,
  questionMusic,
  handleChooseAnswer,
  selectedAnswer,
  answersMusic,
}: MusicsGameQuestionProps) {
  const answerElements = answersMusic.map((answer) => {
    const activeAnswer = answer === selectedAnswer;

    const className = `${styles["musics-question__answer"]} ${activeAnswer ? styles.chosen : ""}`;

    return (
      <div
        key={answer}
        onClick={() => handleChooseAnswer(answer)}
        className={className}
      >
        {answer}
      </div>
    );
  });

  return (
    <div className={styles["musics-question"]}>
      <h2 className={styles["musics-question__question"]}>{questionMusic}</h2>
      <div className={styles["musics-question__answers"]}>{answerElements}</div>
      <ToolBarGame roomId={roomId} multiplicator={2} />
    </div>
  );
}

export default MusicsGameQuestion;
