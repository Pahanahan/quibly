import { useEffect } from "react";

import { quizMusic } from "@/src/lib/quizMusic";

import styles from "./Question.module.scss";

interface QuestionProps {
  question: string;
  answers: string[];
}

function Question({ question, answers }: QuestionProps) {
  useEffect(() => {
    const music = quizMusic("/quiz-sound/tick-tock-timer.wav", true, 0.5);

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
    </div>
  );
}

export default Question;
