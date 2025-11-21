"use client";

import { useState } from "react";
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
  {
    id: 2,
    name: "Quiz 2",
    description: "Какая то другая игра",
    route: "/quiz2",
  },
  {
    id: 3,
    name: "Quiz 3",
    description: "Какая то другая игра",
    route: "/quiz3",
  },
];

function Games() {
  const [game, setGame] = useState<string>("");

  const gamesElements = games.map((game) => {
    return (
      <div key={game.id} className={styles.game}>
        <Link
          className={styles.game__link}
          href="/quiz"
          onClick={() => setGame(game.name)}
        >
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
