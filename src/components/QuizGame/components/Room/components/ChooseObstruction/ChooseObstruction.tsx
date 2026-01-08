import { useState } from "react";

import ObstructionElements from "./components/ObstructionElements/ObstructionElements";
import ToolBarGame from "../ToolBarGame/ToolBarGame";
import Players from "./components/Players/Players";
import { editObstructions } from "./editObstructions";

import styles from "./ChooseObstruction.module.scss";

interface ChooseObstructionProps {
  roomId: string;
}

function ChooseObstruction({ roomId }: ChooseObstructionProps) {
  const [onFinish, setOnFinish] = useState<boolean>(false);
  const [obstructionPlayer, setObstructionPlayer] = useState({
    obstruction: "",
    rusObstruction: "",
    userName: "",
    userId: "",
  });
  const [activeBtnPlayer, setActiveBtnPlayer] = useState<string | null>(null);
  const [activeBtnObstruction, setActiveBtnObstruction] = useState<
    string | null
  >(null);
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleChoosePlayer = (userId: string, userName: string) => {
    setActiveBtnPlayer(userId);
    setObstructionPlayer((prevState) => {
      return { ...prevState, userId: userId, userName: userName };
    });
  };

  const handleChooseObstruction = (
    obstruction: string,
    rusObstruction: string
  ) => {
    setActiveBtnObstruction(obstruction);
    setObstructionPlayer((prevState) => {
      return {
        ...prevState,
        obstruction: obstruction,
        rusObstruction: rusObstruction,
      };
    });
  };

  const handleActiveObstruction = () => {
    setDisabled(true);
    editObstructions({
      roomId: roomId,
      player: obstructionPlayer.userId,
      key: obstructionPlayer.obstruction,
      value: true,
    });
  };

  const obstructionDescription = disabled && (
    <div className={styles.obstruction__descr}>
      Вы применили <span>{obstructionPlayer.rusObstruction}</span> на игроке{" "}
      <span>{obstructionPlayer.userName}</span>
    </div>
  );

  const button = obstructionPlayer.obstruction && obstructionPlayer.userId && (
    <button
      onClick={handleActiveObstruction}
      disabled={disabled}
      type="button"
      className={styles.obstruction__btn}
    >
      Применить
    </button>
  );

  const mainElement = !disabled && (
    <>
      <h2 className={styles.obstruction__title}>
        Выберите игрока которому хотите сделать пакость или защиту
      </h2>
      <Players
        roomId={roomId}
        handleChoosePlayer={handleChoosePlayer}
        activeBtnPlayer={activeBtnPlayer}
      />
      <h2 className={styles.obstruction__title}>Выберите пакость или защиту</h2>
      {
        <ObstructionElements
          activeBtnObstruction={activeBtnObstruction}
          handleChooseObstruction={handleChooseObstruction}
        />
      }
      {button}
      <ToolBarGame roomId={roomId} setOnFinish={setOnFinish} />
    </>
  );

  return (
    !onFinish && (
      <div className={styles.obstruction}>
        {mainElement}
        {obstructionDescription}
      </div>
    )
  );
}

export default ChooseObstruction;
