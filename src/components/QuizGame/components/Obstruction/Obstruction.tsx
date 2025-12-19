import Image from "next/image";

import { usePlayers } from "@/src/hooks/usePlayers";
import { avatars } from "@/src/lib/avatars";

import styles from "./Obstruction.module.scss";

interface ObstructionProps {
  roomId?: string | null;
}

function Obstruction({ roomId }: ObstructionProps) {
  const players = usePlayers({ roomId: roomId ?? undefined });

  const playersElement = players.map((player) => {
    return (
      <div key={player.id} className={styles.obstruction__item}>
        <Image
          src={avatars[player.avatar]}
          width={40}
          height={40}
          alt="animal"
          className={styles.right__avatar}
        />
        <div className={styles.right__name}>{player.userName}</div>
      </div>
    );
  });

  return (
    <div className={styles.obstruction}>
      <h2 className={styles.obstruction__title}>Создайте препятсвие игроку</h2>
      <div className={styles.obstruction__items}>{playersElement}</div>
    </div>
  );
}

export default Obstruction;
