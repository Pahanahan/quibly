import styles from "./ToolBarGame.module.scss";

interface ToolBarGameProp {
  time: number;
}

function ToolBarGame({ time }: ToolBarGameProp) {
  return (
    <div className={styles.toolbar}>
      <div
        style={{ width: `${time - 10}%` }}
        className={styles.toolbar__inner}
      ></div>
    </div>
  );
}

export default ToolBarGame;
