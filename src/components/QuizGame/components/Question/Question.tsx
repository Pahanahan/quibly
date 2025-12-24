import { useEffect } from "react";

import { quizMusic } from "@/src/lib/quizMusic";

import styles from "./Question.module.scss";

interface QuestionProps {
  question: string;
  answers: string[];
}

function Question({ question, answers }: QuestionProps) {
  // const [time, setTime] = useState<number>(100);
  // const [stopTimer, setStopTimer] = useState<boolean>(false);

  // const dateNow = getDateNow();

  // const startTime: number =
  //   useRoomFields({
  //     roomId: roomId,
  //     key: "startTimeRound",
  //   }) || dateNow;

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     if (stopTimer) return;

  //     if (time > 0) {
  //       const differentTime = (startTime + 10000 - Date.now()) / 100;
  //       setTime(differentTime);
  //     }

  //     if (time <= 0) {
  //       setStopTimer(true);
  //     }
  //   }, 50);

  //   return () => clearTimeout(timer);
  // }, [roomId, startTime, time, stopTimer]);

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
      {/* <ToolBar time={time} /> */}
    </div>
  );
}

export default Question;
