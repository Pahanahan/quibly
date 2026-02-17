import { quizRounds } from "@/src/data/quizRounds";

import styles from "./RoomIntro.module.scss";

interface RoomIntroProps {
  currentRound: number | null;
}

function RoomIntro({ currentRound }: RoomIntroProps) {
  const { round, displayTitle } = quizRounds[currentRound || 0];

  return (
    <div className={styles.intro}>
      <span className={styles.intro__round}>{round}.</span>
      <span className={styles.intro__title}>{displayTitle}</span>
    </div>
  );
}

export default RoomIntro;
