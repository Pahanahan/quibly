import { useState } from "react";

import { usePlayers } from "@/src/hooks/usePlayers";
// import { editPlayer } from "@/src/lib/editPlayer";
import { editObstructions } from "./editObstructions";
import { quizObstructions } from "@/src/data/quizObstructions";

import styles from "./ChooseObstruction.module.scss";

interface ChooseObstructionProps {
  roomId: string;
}

function ChooseObstruction({ roomId }: ChooseObstructionProps) {
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
      value: obstructionPlayer.obstruction,
    });
  };

  const players = usePlayers({ roomId: roomId });

  const playersElement = players.map((player) => {
    const className = `${styles.obstruction__player} ${
      activeBtnPlayer === player.id ? styles["obstruction__player--active"] : ""
    }`;

    return (
      <button
        onClick={() => handleChoosePlayer(player.id, player.userName)}
        type="button"
        key={player.id}
        className={className}
      >
        {player.userName}
      </button>
    );
  });

  const obstructionsElement = quizObstructions.map((obstruction) => {
    const className = `${styles.obstruction__item} ${
      activeBtnObstruction === obstruction.name
        ? styles["obstruction__item--active"]
        : ""
    }`;

    return (
      <button
        onClick={() =>
          handleChooseObstruction(obstruction.name, obstruction.rusName)
        }
        type="button"
        key={obstruction.id}
        className={className}
      >
        {obstruction.rusName}
      </button>
    );
  });

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
      <div className={styles.obstruction__players}>{playersElement}</div>
      <h2 className={styles.obstruction__title}>Выберите пакость или защиту</h2>
      <div className={styles.obstruction__items}>{obstructionsElement}</div>
      {button}
    </>
  );

  return (
    <div className={styles.obstruction}>
      {mainElement}
      {obstructionDescription}
    </div>
  );
}

export default ChooseObstruction;
