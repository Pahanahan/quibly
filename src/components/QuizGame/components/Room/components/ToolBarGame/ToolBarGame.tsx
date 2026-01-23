import { useState, useEffect } from "react";

import { useRoomFields } from "@/src/hooks/useRoomFields";
import { getDateNow } from "@/src/lib/getDateNow";

import styles from "./ToolBarGame.module.scss";

interface ToolBarGameProp {
  roomId: string;
  multiplicator: number;
}

function ToolBarGame({ roomId, multiplicator }: ToolBarGameProp) {
  const [time, setTime] = useState<number>(100);

  const roundDuration = 10000 * multiplicator;

  const dateNow = getDateNow();

  const startTimeRound =
    useRoomFields({
      roomId: roomId,
      key: "startTimeRound",
    }) || dateNow;

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const remainingTime = startTimeRound + roundDuration - Date.now();
      const progress = (remainingTime / roundDuration) * 100;

      setTime(progress);
    }, 100);

    return () => clearInterval(timeInterval);
  }, [startTimeRound, time, roundDuration]);

  return (
    <div className={styles.toolbar}>
      <div
        style={{ width: `${time}%` }}
        className={styles.toolbar__inner}
      ></div>
    </div>
  );
}

export default ToolBarGame;
