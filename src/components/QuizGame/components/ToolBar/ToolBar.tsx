import styles from "./ToolBar.module.scss";

interface ToolBarProp {
  time: number;
}

function ToolBar({ time }: ToolBarProp) {
  return (
    <div className={styles.toolbar}>
      <div
        style={{ width: `${time - 10}%` }}
        className={styles.toolbar__inner}
      ></div>
    </div>
  );
}

export default ToolBar;
