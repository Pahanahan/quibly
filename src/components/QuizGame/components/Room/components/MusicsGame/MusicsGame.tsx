import { useState, useEffect } from "react";

import MusicsGameQuestion from "./components/MusicsGameQuestion/MusicsGameQuestion";
import MusicsGameAnswer from "./components/MusicsGameAnswer/MusicsGameAnswer";
import { editPlayer } from "@/src/lib/editPlayer";
import { editScore } from "@/src/lib/editScore";
import { useRoomFields } from "@/src/hooks/useRoomFields";
import { getDateNow } from "@/src/lib/getDateNow";

import { GamePhase } from "@/src/types/types";
import styles from "./MusicsGame.module.scss";

interface MusicsGameProps {
  roomId: string;
  userId: string;
  questionMusic: string;
  answersMusic: string[];
  rightAnswerMusic: string;
  gamePhase: GamePhase;
}

function MusicsGame({
  roomId,
  userId,
  questionMusic,
  answersMusic,
  rightAnswerMusic,
  gamePhase,
}: MusicsGameProps) {
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
    if (gamePhase !== GamePhase.MUSICS_ANSWER) return;
    if (score === 0) return;

    editScore({
      roomId: roomId,
      userId: userId,
      score: score,
    });
  }, [gamePhase, roomId, userId, score]);

  const handleChooseAnswer = (answer: string) => {
    setSelectedAnswer(answer);

    const isRight = answer === rightAnswerMusic;
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

  if (!answersMusic) {
    return (
      <div className={styles.movies}>
        <h2 className={styles.movies__question}>{questionMusic}</h2>
      </div>
    );
  }

  return (
    <div className={styles.musics}>
      {gamePhase === GamePhase.MUSICS && (
        <MusicsGameQuestion
          roomId={roomId}
          questionMusic={questionMusic}
          handleChooseAnswer={handleChooseAnswer}
          selectedAnswer={selectedAnswer}
          answersMusic={answersMusic}
        />
      )}
      {gamePhase === GamePhase.MUSICS_ANSWER && (
        <MusicsGameAnswer
          rightAnswerMusic={rightAnswerMusic}
          rightAnswerState={rightAnswerState}
        />
      )}
    </div>
  );
}

export default MusicsGame;
