import { quizRounds } from "@/src/data/quizRounds";

import styles from "./Intro.module.scss";

interface IntroProps {
  currentRound: number;
}

function Intro({ currentRound }: IntroProps) {
  const title = quizRounds[currentRound]?.displayTitle || "";
  const round = quizRounds[currentRound]?.round || "";

  return (
    <div className={styles.intro}>
      <span className={styles.intro__round}>{round}.</span>
      <span className={styles.intro__title}>{title}</span>
    </div>
  );
}

export default Intro;
