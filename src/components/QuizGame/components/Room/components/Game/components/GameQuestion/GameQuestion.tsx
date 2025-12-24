import ToolBarGame from "../../../ToolBarGame/ToolBarGame";

import styles from "./GameQuestion.module.scss";

interface GameQuestionProps {
  roomId: string;
  question: string;
  answers: string[];
  selectedAnswer: string | null;
  handleChooseAnswer: (answer: string) => void;
  obstructionsArr: string[];
}

function GameQuestion({
  roomId,
  question,
  answers,
  selectedAnswer,
  handleChooseAnswer,
  obstructionsArr,
}: GameQuestionProps) {
  const answersElements = answers.map((answer) => {
    const activeAnswer = answer === selectedAnswer;

    const className = `${styles.game__answer} ${
      activeAnswer ? styles.chosen : ""
    }`;

    return (
      <div
        onClick={() => handleChooseAnswer(answer)}
        key={answer}
        className={className}
      >
        {answer}
      </div>
    );
  });

  const obstructionsCss = obstructionsArr.includes("defender")
    ? [""]
    : obstructionsArr.map((obstruction: string) => {
        return styles[obstruction];
      });

  return (
    <div className={[styles.game, ...obstructionsCss].join(" ")}>
      <h2 className={styles.game__question}>{question}</h2>
      <div className={styles.game__answers}>{answersElements}</div>
      <ToolBarGame roomId={roomId} />
    </div>
  );
}

export default GameQuestion;
