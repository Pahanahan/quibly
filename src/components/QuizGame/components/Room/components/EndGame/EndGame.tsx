import styles from "./EndGame.module.scss";

interface EndGameProps {
  setFormHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

function EndGame({ setFormHidden }: EndGameProps) {
  setFormHidden(false);

  return (
    <div className={styles.end}>
      <div className={styles.end__text}>Конец игры!</div>
    </div>
  );
}

export default EndGame;
