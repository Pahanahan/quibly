import { useEffect } from "react";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";

import { editRoom } from "@/src/lib/editRoom";
import { deleteRoom } from "./deleteRoom";
import {
  getToLocalStorage,
  saveToLocalStorage,
} from "@/src/lib/getSetlocalStorage";
import { avatars } from "@/src/lib/avatars";

import { GamePhase, QuizPlayer } from "@/src/types/types";
import musicOn from "@/public/quiz-icons/music-on.svg";
import musicOff from "@/public/quiz-icons/music-off.svg";
import spinner from "@/public/quiz-circle.svg";
import styles from "./JoinRoom.module.scss";

interface JoinRoomProps {
  roomId: string;
  players: QuizPlayer[];
  disabled: boolean;
  setGamePhase: React.Dispatch<React.SetStateAction<GamePhase>>;
  musicState: boolean;
  setMusicState: React.Dispatch<React.SetStateAction<boolean>>;
}

function JoinRoom({
  roomId,
  players,
  disabled,
  setGamePhase,
  musicState,
  setMusicState,
}: JoinRoomProps) {
  const imageSound = musicState ? musicOff : musicOn;
  const soundText = musicState ? "Выключить музыку" : "Включить музыку";

  useEffect(() => {
    if (!roomId) return;

    const roomIdLocalStorage = getToLocalStorage("QuizGameRoomIdMain");

    if (roomIdLocalStorage && roomIdLocalStorage !== roomId) {
      deleteRoom(roomIdLocalStorage);
      saveToLocalStorage("QuizGameRoomIdMain", roomId);
    } else {
      saveToLocalStorage("QuizGameRoomIdMain", roomId);
    }
  }, [roomId]);

  const handleSetMusicState = () => {
    setMusicState(!musicState);
  };

  const handleStartGame = () => {
    if (!roomId) {
      console.warn("Нельзя начать игру - нет roomId");
      return;
    }

    setGamePhase("question");

    editRoom({ roomId: roomId, key: "isGameStarted", value: true });
  };

  const playersElement = players.map((player, i) => {
    return (
      <div key={player.id || i} className={styles.join__player}>
        {player.userName}
        <Image
          src={avatars[player.avatar] ?? spinner}
          width={50}
          height={50}
          alt="avatar"
        />
      </div>
    );
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
        <button onClick={handleSetMusicState} className={styles.join__music}>
          {soundText}
          <Image src={imageSound} width={30} height={30} alt="sound" />
        </button>
      </div>
      <div className={styles.join__spinner}>
        <Image src={spinner} height={50} width={50} alt="spinner" />
      </div>
    </div>
  );
}

export default JoinRoom;
