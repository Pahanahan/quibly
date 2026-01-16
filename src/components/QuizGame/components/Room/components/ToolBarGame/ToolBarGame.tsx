import { useState, useEffect } from "react";

import { useRoomFields } from "@/src/hooks/useRoomFields";
import { getDateNow } from "@/src/lib/getDateNow";

import styles from "./ToolBarGame.module.scss";

interface ToolBarGameProp {
  roomId: string;
}

function ToolBarGame({ roomId }: ToolBarGameProp) {
  const [time, setTime] = useState<number>(100);

  const dateNow = getDateNow();

  const startTimeRound =
    useRoomFields({
      roomId: roomId,
      key: "startTimeRound",
    }) || dateNow;

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const differentTime = (startTimeRound + 10000 - Date.now()) / 100;

      setTime(differentTime);
    }, 100);

    return () => clearInterval(timeInterval);
  }, [startTimeRound, time]);

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
