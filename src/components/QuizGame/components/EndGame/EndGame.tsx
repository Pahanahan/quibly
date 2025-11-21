import Link from "next/link";

import styles from "./EndGame.module.scss";

function EndGame() {
  return (
    <div className={styles.end}>
      <div className={styles.end__text}> Игра окончена!</div>
      <Link href="/" className={styles.end__back}>
        Назад в Меню
      </Link>
    </div>
  );
}

export default EndGame;
