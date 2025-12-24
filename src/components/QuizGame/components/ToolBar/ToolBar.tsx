import { useState, useEffect } from "react";

import styles from "./ToolBar.module.scss";

interface ToolBarProp {
  time: number;
}

function ToolBar({ time }: ToolBarProp) {
  const [dateNow, setDateNow] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const differentTime = (time + 10000 - Date.now()) / 100;
      setDateNow(differentTime);
    }, 50);

    return () => clearInterval(interval);
  }, [time, dateNow]);

  return (
    <div className={styles.toolbar}>
      <div
        style={{ width: `${dateNow - 10}%` }}
        className={styles.toolbar__inner}
      ></div>
    </div>
  );
}

export default ToolBar;
