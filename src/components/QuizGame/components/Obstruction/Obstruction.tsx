import Image from "next/image";

import ObstructionItem from "./components/ObstructionItem";
import { avatars } from "@/src/lib/avatars";

import { QuizPlayer } from "@/src/types/types";
import styles from "./Obstruction.module.scss";

interface ObstructionProps {
  players: QuizPlayer[];
}

function Obstruction({ players }: ObstructionProps) {
  const playersElement = players.map((player) => {
    const obstructions = Object.entries(player.obstructions);

    return (
      <div key={player.id} className={styles.obstruction__item}>
        <Image
          src={avatars[player.avatar]}
          width={40}
          height={40}
          alt="animal"
        />
        <div>{player.userName}</div>
        {obstructions.map((item) => (
          <ObstructionItem key={item[0]} keyObstr={item[0]} value={item[1]} />
        ))}
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
