import Image from "next/image";

import ToolBarGame from "../../../ToolBarGame/ToolBarGame";

import styles from "./MoviesGameQuestion.module.scss";

interface MoviesGameQuestionProps {
  roomId: string;
  questionMovie: string;
  handleChooseAnswer: (answer: string) => void;
  selectedAnswer: string | null;
  answersMovie: string[];
  srcImageMovie: string;
}

function MoviesGameQuestion({
  roomId,
  questionMovie,
  handleChooseAnswer,
  selectedAnswer,
  answersMovie,
  srcImageMovie,
}: MoviesGameQuestionProps) {
  const answerElements = answersMovie.map((answer) => {
    const activeAnswer = answer === selectedAnswer;

    const className = `${styles["movies-question__answer"]} ${activeAnswer ? styles.chosen : ""}`;

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
    <div className={styles["movies-question"]}>
      <h2 className={styles["movies-question__question"]}>{questionMovie}</h2>
      <Image
        className={styles["movies-question__image"]}
        src={srcImageMovie}
        width={600}
        height={400}
        priority
        alt="movie"
      />
      <div className={styles["movies-question__answers"]}>{answerElements}</div>
      <ToolBarGame roomId={roomId} multiplicator={1} />
    </div>
  );
}

export default MoviesGameQuestion;
