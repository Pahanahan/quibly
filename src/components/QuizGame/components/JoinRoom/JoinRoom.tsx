import Image from "next/image";

import spinner from "@/public/quiz-circle.svg";
import styles from "./JoinRoom.module.scss";

interface JoinRoomProps {
  roomId: string;
  players: object;
}

function JoinRoom({ roomId, players }: JoinRoomProps) {
  console.log(players);

  return (
    <div className={styles.join}>
      <div className={styles.join__inner}>
        <div className={styles.join__site}>
          Зайдите на сайт: <span>{`http://localhost:3000/quiz/${roomId}`}</span>
        </div>
        <div className={styles.join__room}>
          Введите id комнаты: <span>{roomId}</span>
        </div>
        <button disabled className={styles.join__btn}>
          Начать игру
        </button>
      </div>
      <div className={styles.join__spinner}>
        <Image src={spinner} height={50} width={50} alt="spinner" />
      </div>
    </div>
  );
}

export default JoinRoom;
