import { useState, useEffect } from "react";

import MoviesGameQuestion from "./components/MoviesGameQuestion/MoviesGameQuestion";
import MoviesGameAnswer from "./components/MoviesGameAnswer/MoviesGameAnswer";
import { editPlayer } from "@/src/lib/editPlayer";
import { editScore } from "@/src/lib/editScore";
import { useRoomFields } from "@/src/hooks/useRoomFields";
import { getDateNow } from "@/src/lib/getDateNow";

import { GamePhase } from "@/src/types/types";
import styles from "./MoviesGame.module.scss";

interface MoviesGameProps {
  roomId: string;
  userId: string;
  questionMovie: string;
  answersMovie: string[];
  rightAnswerMovie: string;
  srcImageMovie: string;
  gamePhase: GamePhase;
}

function MoviesGame({
  roomId,
  userId,
  questionMovie,
  answersMovie,
  rightAnswerMovie,
  srcImageMovie,
  gamePhase,
}: MoviesGameProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [rightAnswerState, setRightAnswerState] = useState<
    boolean | "нет ответа"
  >("нет ответа");
  const [score, setScore] = useState<number>(0);

  const dateNow = getDateNow();

  const startTime: number =
    useRoomFields({
      roomId: roomId,
      key: "startTimeRound",
    }) || dateNow;

  useEffect(() => {
    if (gamePhase !== GamePhase.MOVIES_ANSWER) return;
    if (score === 0) return;

    editScore({
      roomId: roomId,
      userId: userId,
      score: score,
    });
  }, [gamePhase, roomId, userId, score]);

  const handleChooseAnswer = (answer: string) => {
    setSelectedAnswer(answer);

    const isRight = answer === rightAnswerMovie;
    setRightAnswerState(isRight);

    const endTime = Date.now();

    const differentTime = endTime - startTime;

    const score = isRight ? Math.floor(500000 / differentTime + 100) : 0;

    setScore(score);

    editPlayer({
      roomId: roomId,
      player: userId,
      key: "currentScore",
      value: score,
    });
  };

  if (!answersMovie) {
    return (
      <div className={styles.movies}>
        <h2 className={styles.movies__question}>{questionMovie}</h2>
      </div>
    );
  }

  return (
    <div className={styles.movies}>
      {gamePhase === GamePhase.MOVIES && (
        <MoviesGameQuestion
          roomId={roomId}
          questionMovie={questionMovie}
          handleChooseAnswer={handleChooseAnswer}
          selectedAnswer={selectedAnswer}
          answersMovie={answersMovie}
          srcImageMovie={srcImageMovie}
        />
      )}
      {gamePhase === GamePhase.MOVIES_ANSWER && (
        <MoviesGameAnswer
          rightAnswerMovie={rightAnswerMovie}
          rightAnswerState={rightAnswerState}
        />
      )}
    </div>
  );
}

export default MoviesGame;
