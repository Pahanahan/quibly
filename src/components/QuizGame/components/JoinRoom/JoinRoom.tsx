import { SetStateAction } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

// import { useStartGame } from "@/src/hooks/useStartGame";
import { editRoom } from "@/src/lib/editRoom";

import spinner from "@/public/quiz-circle.svg";
import ape from "@/public/quiz-avatar/ape.svg";
import bird from "@/public/quiz-avatar/bird.svg";
import bull from "@/public/quiz-avatar/bull.svg";
import dog from "@/public/quiz-avatar/dog.svg";
import camel from "@/public/quiz-avatar/camel.svg";
import cat from "@/public/quiz-avatar/cat.svg";
import horse from "@/public/quiz-avatar/horse.svg";
import rabbit from "@/public/quiz-avatar/rabbit.svg";
import cow from "@/public/quiz-avatar/cow.svg";
import duck from "@/public/quiz-avatar/duck.svg";
import elephant from "@/public/quiz-avatar/elephant.svg";
import fish from "@/public/quiz-avatar/fish.svg";
import goose from "@/public/quiz-avatar/goose.svg";
import giraffe from "@/public/quiz-avatar/giraffe.svg";
import lion from "@/public/quiz-avatar/lion.svg";
import mouse from "@/public/quiz-avatar/mouse.svg";
import turtle from "@/public/quiz-avatar/turtle.svg";
import tiger from "@/public/quiz-avatar/tiger.svg";
import zebra from "@/public/quiz-avatar/zebra.svg";
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
  startGame: boolean;
  setStartGame: React.Dispatch<SetStateAction<boolean>>;
}

function JoinRoom({
  roomId,
  players,
  disabled,
  startGame,
  setStartGame,
}: JoinRoomProps) {
  const avatarMap: Record<string, StaticImageData> = {
    ape,
    bird,
    bull,
    dog,
    camel,
    cat,
    horse,
    rabbit,
    cow,
    duck,
    elephant,
    fish,
    goose,
    giraffe,
    lion,
    mouse,
    turtle,
    tiger,
    zebra,
  };

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
            src={avatarMap[player.avatar]}
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
          Зайдите на сайт: <span>{`http://localhost:3000/quiz/${roomId}`}</span>
        </div>
        <div className={styles.join__room}>
          Введите id комнаты: <span>{roomId}</span>
        </div>
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
