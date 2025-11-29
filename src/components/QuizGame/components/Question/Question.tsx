import { useEffect } from "react";

import { quizMusic } from "@/src/lib/utils/quizMusic";

import styles from "./Question.module.scss";

interface QuestionProps {
  question: string;
  answers: string[];
  time: number;
}

function Question({ question, answers, time }: QuestionProps) {
  useEffect(() => {
    const music = quizMusic("/quiz-sound/tick-tock-timer.wav", true, 0.7);

    music.play();

    return () => {
      music.stop();
    };
  }, []);

  const answersElements = answers.map((answer: string) => {
    return (
      <div key={answer} className={styles.question__item}>
        {answer}
      </div>
    );
  });

  return (
    <div className={styles.question}>
      <h2 className={styles.question__title}>{question}</h2>
      <div className={styles.question__answers}>{answersElements}</div>
      <div className={styles.question__bar}>
        <div
          style={{ width: `${time}%` }}
          className={styles["question__bar--active"]}
        ></div>
      </div>
    </div>
  );
}

export default Question;
