import { SetStateAction } from "react";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";

import { editRoom } from "@/src/lib/editRoom";
import { avatars } from "@/src/lib/utils/avatars";

import spinner from "@/public/quiz-circle.svg";
import styles from "./JoinRoom.module.scss";

interface Player {
  userName: string;
  ready: boolean;
  id: string;
  score: number;
  avatar: string;
}

interface JoinRoomProps {
  roomId: string;
  players: Player[];
  disabled: boolean;
  setStartGame: React.Dispatch<SetStateAction<boolean>>;
}

function JoinRoom({ roomId, players, disabled, setStartGame }: JoinRoomProps) {
  const handleStartGame = () => {
    if (!roomId) {
      console.warn("Нельзя начать игру - нет roomId");
      return;
    }

    setStartGame(true);

    editRoom({ roomId: roomId, key: "isGameStarted", value: true });
  };

  const playersElement = players.map((player) => {
    if (player.userName === "Fake" && player.id === "idFake") {
      return;
    } else {
      return (
        <div key={player.id} className={styles.join__player}>
          {player.userName}
          <Image
            src={avatars[player.avatar]}
            width={50}
            height={50}
            alt="avatar"
          />
        </div>
      );
    }
  });

  return (
    <div className={styles.join}>
      <div className={styles.join__inner}>
        <div className={styles.join__site}>
          Зайдите на сайт:{" "}
          <span>{`${process.env.NEXT_PUBLIC_BASE_URL}/quiz/${roomId}`}</span>
        </div>
        <div className={styles.join__room}>
          Введите id комнаты: <span>{roomId}</span>
        </div>
        <QRCodeSVG
          value={`${process.env.NEXT_PUBLIC_BASE_URL}/quiz/${roomId}`}
          size={300}
        />
        <button
          onClick={handleStartGame}
          disabled={disabled}
          className={styles.join__btn}
        >
          Начать игру
        </button>
        <div className={styles["join__added-players"]}>
          Игроки добавившиеся в игру...
        </div>
        <div className={styles.join__players}>{playersElement}</div>
      </div>
      <div className={styles.join__spinner}>
        <Image src={spinner} height={50} width={50} alt="spinner" />
      </div>
    </div>
  );
}

export default JoinRoom;
