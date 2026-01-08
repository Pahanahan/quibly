import { useEffect } from "react";

import { quizMusic } from "@/src/lib/quizMusic";

import styles from "./MemoryChoose.module.scss";

function MemoryChoose() {
  useEffect(() => {
    const music = quizMusic("/quiz-sound/tick-tock-timer.wav", true, 0.7);

    music.play();

    return () => {
      music.stop();
    };
  }, []);

  return (
    <div className={styles["memory-choose"]}>
      <h2>Выберите изображения в правильном порядке</h2>
    </div>
  );
}

export default MemoryChoose;
