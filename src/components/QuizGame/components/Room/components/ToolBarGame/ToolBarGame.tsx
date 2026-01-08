import {
  useState,
  useEffect,
  // SetStateAction
} from "react";

import { useRoomFields } from "@/src/hooks/useRoomFields";
import { getDateNow } from "@/src/lib/getDateNow";

import styles from "./ToolBarGame.module.scss";

interface ToolBarGameProp {
  roomId: string;
  // setOnFinish?: React.Dispatch<SetStateAction<boolean>>;
}

function ToolBarGame({
  roomId,
}: //  setOnFinish
ToolBarGameProp) {
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
      // if (setOnFinish && time <= 0) {
      //   setOnFinish(true);
      // }

      setTime(differentTime);
    }, 100);

    return () => clearInterval(timeInterval);
  }, [
    startTimeRound,
    time,
    // setOnFinish
  ]);

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
