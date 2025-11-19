import { useState } from "react";

import Form from "./components/Form/Form";
import ReadyGame from "./components/ReadyGame/ReadyGame";
import { generateId } from "@/src/lib/utils";

import styles from "./Room.module.scss";

interface RoomProps {
  roomId: string;
}

function Room({ roomId }: RoomProps) {
  const [userName, setUserName] = useState<string>("");
  const [ready, setReady] = useState<boolean>(false);

  const playerId = {
    userName: userName,
    ready: true,
    id: `${userName}${generateId()}`,
  };

  const joinToRoom = async () => {
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
  };

  console.log(ready);

  const disabled = userName.trim().length > 0 ? false : true;

  return (
    <div className={styles.room}>
      <div className="container">
        <div className={styles.room__inner}>
          {!ready && (
            <Form
              joinGame={joinGame}
              roomId={roomId}
              userName={userName}
              changeName={changeName}
              disabled={disabled}
            />
          )}
          {ready && <ReadyGame />}
        </div>
      </div>
    </div>
  );
}

export default Room;
