import { usePlayers } from "@/src/hooks/usePlayers";

import styles from "./Players.module.scss";

interface PlayersProps {
  roomId: string;
  handleChoosePlayer: (arg1: string, arg2: string) => void;
  activeBtnPlayer: string | null;
}

function Players({
  roomId,
  handleChoosePlayer,
  activeBtnPlayer,
}: PlayersProps) {
  const players = usePlayers({ roomId: roomId });

  const playersElement = players.map((player) => {
    const className = `${styles.players__player} ${
      activeBtnPlayer === player.id ? styles["players__player--active"] : ""
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

  return <div className={styles.players}>{playersElement}</div>;
}

export default Players;
