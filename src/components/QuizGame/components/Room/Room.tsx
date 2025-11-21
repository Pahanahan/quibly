import { useState, useEffect } from "react";

import Form from "./components/Form/Form";
import ReadyGame from "./components/ReadyGame/ReadyGame";
import { generateId } from "@/src/lib/utils";
import {
  getToLocalStorage,
  saveToLocalStorage,
} from "@/src/lib/getSetlocalStorage";
import { quizAvatars } from "@/src/data/quizAvatars";

import styles from "./Room.module.scss";

interface RoomProps {
  roomId: string;
}

function Room({ roomId }: RoomProps) {
  const [, setId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>("");
  const [ready, setReady] = useState<boolean>(false);
  const [randomAvatar] = useState(() => {
    const index = Math.floor(Math.random() * quizAvatars.length);
    return quizAvatars[index].name;
  });

  useEffect(() => {
    const storedRoomId = getToLocalStorage("QuizGame");
    if (storedRoomId) {
      setTimeout(() => {
        setId(storedRoomId);
        setReady(storedRoomId !== false);
      }, 0);
    }
  }, [roomId]);

  const joinToRoom = async () => {
    const playerId = {
      userName: userName,
      ready: true,
      id: `${userName}${generateId()}`,
      score: 0,
      avatar: randomAvatar,
    };

    const response = await fetch(
      `https://quizgame-30deb-default-rtdb.firebaseio.com/rooms/${roomId}/players/${playerId.id}.json`,
      {
        method: "PATCH",
        body: JSON.stringify(playerId),
      }
    );

    if (!response.ok) throw new Error("Ошибка");

    return await response.json();
  };

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const joinGame = (e: React.FormEvent) => {
    e.preventDefault();
    setReady(true);
    joinToRoom();
    saveToLocalStorage("QuizGame", roomId);
  };

  const disabled = userName.trim().length === 0;

  const formElement = !ready && (
    <Form
      joinGame={joinGame}
      roomId={roomId}
      userName={userName}
      changeName={changeName}
      disabled={disabled}
    />
  );

  return (
    <div className={styles.room}>
      <div className="container">
        <div className={styles.room__inner}>
          {formElement}
          {ready && <ReadyGame />}
        </div>
      </div>
    </div>
  );
}

export default Room;
