"use client";

import Link from "next/link";

import GamesTitle from "../GamesTitle/GamesTitle";

import styles from "./Games.module.scss";

const games = [
  {
    id: 1,
    name: "Quiz",
    description: "Обычная игра викторина",
    route: "/quiz",
  },
];

function Games() {
  const gamesElements = games.map((game) => {
    return (
      <div key={game.id} className={styles.game}>
        <Link className={styles.game__link} href="/quiz">
          {game.name}
        </Link>
        <p className={styles.game__descr}>{game.description}</p>
      </div>
    );
  });

  return (
    <div className={styles.games}>
      <GamesTitle />
      {gamesElements}
    </div>
  );
}

export default Games;
