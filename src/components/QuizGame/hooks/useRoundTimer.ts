import { useEffect, useRef } from "react";

import { getDateNow } from "@/src/lib/getDateNow";
import { editRoom } from "@/src/lib/editRoom";
import { resetObstructions } from "../utils/resetObstructions";
import { resetCurrentScore } from "../utils/resetCurrentScore";
import { changePhase } from "../utils/changePhase";
import { changePhaseWithReset } from "../utils/changePhaseWithReset";

import { GamePhase, QuizPlayer, QuizQuestion } from "@/src/types/types";

const QUESTION_DURATION = 11000;
const ANSWER_DURATION = 7000;
const OBSTRUCTION_DURATION = 11000;
const MEMORY_DURATION = 11000;
const MEMORY_CHOOSE_DURATION = 16000;
const MEMORY_ANSWER_DURATION = 7000;
const SORTING_DURATION = 21000;
const SORTING_ANSWER_DURATION = 7000;
const MOVIES_DURATION = 11000;
const MOVIES_ANSWER_DURATION = 7000;

const obstructionRounds = [4, 8, 12, 18];
const sortingRounds = [3, 7, 11, 15];
const movieRounds = [0, 1, 2, 6, 14, 16];
const memoriesRound = [10];

export const useRoundTimer = (
  roomId: string | null,
  gamePhase: GamePhase | null,
  currentQuestion: number,
  startTimeRound: number,
  players: QuizPlayer[],
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>,
  questions: QuizQuestion[],
) => {
  const roundLockedRef = useRef(false);

  useEffect(() => {
    if (!roomId) return;

    const newRound = () => {
      if (roundLockedRef.current) return;
      roundLockedRef.current = true;
      setCurrentQuestion((prev) => {
        const next = prev + 1;

        if (next >= questions.length) {
          editRoom({
            roomId: roomId || null,
            key: "gamePhase",
            value: GamePhase.GAME_END,
          });

          return prev;
        }

        editRoom({
          roomId: roomId || null,
          key: "currentQuestionIndex",
          value: next,
        });
        editRoom({
          roomId: roomId || null,
          key: "startTimeRound",
          value: Date.now(),
        });
        players.forEach((player) => {
          resetCurrentScore({
            roomId: roomId || null,
            player: player.id,
          });
        });

        return next;
      });
    };

    let interval: ReturnType<typeof setInterval> | null = null;

    switch (gamePhase) {
      case GamePhase.QUESTION: {
        interval = setInterval(() => {
          const dateNow = getDateNow();
          const endTime = startTimeRound + QUESTION_DURATION - dateNow;

          if (endTime <= 0) {
            changePhase({ roomId, nextPhase: GamePhase.ANSWER });
          }
        }, 500);
        break;
      }

      case GamePhase.ANSWER: {
        interval = setInterval(() => {
          const dateNow = getDateNow();
          const endTime = startTimeRound + ANSWER_DURATION - dateNow;

          if (endTime <= 0) {
            if (obstructionRounds.includes(currentQuestion)) {
              changePhase({ roomId, nextPhase: GamePhase.OBSTRUCTION });

              return;
            } else if (memoriesRound.includes(currentQuestion)) {
              changePhaseWithReset({
                roomId,
                nextPhase: GamePhase.MEMORY,
                players,
              });

              return;
            } else if (sortingRounds.includes(currentQuestion)) {
              changePhaseWithReset({
                roomId,
                nextPhase: GamePhase.SORTING,
                players,
              });

              return;
            } else if (movieRounds.includes(currentQuestion)) {
              changePhaseWithReset({
                roomId,
                nextPhase: GamePhase.MOVIES,
                players,
              });

              return;
            } else {
              players.forEach((player) => {
                resetObstructions({
                  roomId: roomId || null,
                  player: player.id,
                });
              });
              if (currentQuestion >= questions.length - 1) {
                editRoom({
                  roomId: roomId || null,
                  key: "gamePhase",
                  value: GamePhase.GAME_END,
                });
                return;
              } else {
                editRoom({
                  roomId: roomId || null,
                  key: "gamePhase",
                  value: GamePhase.QUESTION,
                });
                newRound();
              }
            }
          }
        }, 500);
        break;
      }

      case GamePhase.OBSTRUCTION: {
        interval = setInterval(() => {
          const dateNow = getDateNow();
          const endTime = startTimeRound + OBSTRUCTION_DURATION - dateNow;

          if (endTime <= 0) {
            editRoom({
              roomId: roomId || null,
              key: "gamePhase",
              value: GamePhase.QUESTION,
            });
            newRound();
          }
        }, 500);
        break;
      }

      case GamePhase.MEMORY: {
        interval = setInterval(() => {
          const dateNow = getDateNow();
          const endTime = startTimeRound + MEMORY_DURATION - dateNow;

          if (endTime <= 0) {
            changePhase({
              roomId,
              nextPhase: GamePhase.MEMORY_CHOOSE,
            });
          }
        }, 500);
        break;
      }

      case GamePhase.MEMORY_CHOOSE: {
        interval = setInterval(() => {
          const dateNow = getDateNow();
          const endTime = startTimeRound + MEMORY_CHOOSE_DURATION - dateNow;

          if (endTime <= 0) {
            changePhase({
              roomId,
              nextPhase: GamePhase.MEMORY_ANSWER,
            });
          }
        }, 500);
        break;
      }

      case GamePhase.MEMORY_ANSWER: {
        interval = setInterval(() => {
          const dateNow = getDateNow();
          const endTime = startTimeRound + MEMORY_ANSWER_DURATION - dateNow;

          if (endTime <= 0) {
            changePhaseWithReset({
              roomId,
              nextPhase: GamePhase.QUESTION,
              players,
            });
            newRound();
          }
        }, 500);
        break;
      }

      case GamePhase.SORTING: {
        interval = setInterval(() => {
          const dateNow = getDateNow();
          const endTime = startTimeRound + SORTING_DURATION - dateNow;

          if (endTime <= 0) {
            changePhase({
              roomId,
              nextPhase: GamePhase.SORTING_ANSWER,
            });
          }
        }, 500);
        break;
      }

      case GamePhase.SORTING_ANSWER: {
        interval = setInterval(() => {
          const dateNow = getDateNow();
          const endTime = startTimeRound + SORTING_ANSWER_DURATION - dateNow;

          if (endTime <= 0) {
            changePhase({
              roomId,
              nextPhase: GamePhase.QUESTION,
            });
            newRound();
          }
        }, 500);
        break;
      }

      case GamePhase.MOVIES: {
        interval = setInterval(() => {
          const dateNow = getDateNow();
          const endTime = startTimeRound + MOVIES_DURATION - dateNow;

          if (endTime <= 0) {
            changePhase({
              roomId,
              nextPhase: GamePhase.MOVIES_ANSWER,
            });
          }
        }, 500);
        break;
      }

      case GamePhase.MOVIES_ANSWER: {
        interval = setInterval(() => {
          const dateNow = getDateNow();
          const endTime = startTimeRound + MOVIES_ANSWER_DURATION - dateNow;

          if (endTime <= 0) {
            changePhaseWithReset({
              roomId,
              nextPhase: GamePhase.QUESTION,
              players,
            });
            newRound();
          }
        }, 500);
        break;
      }
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [
    roomId,
    gamePhase,
    currentQuestion,
    startTimeRound,
    players,
    questions,
    setCurrentQuestion,
  ]);

  useEffect(() => {
    if (gamePhase === GamePhase.QUESTION) {
      roundLockedRef.current = false;
    }
  }, [gamePhase]);
};
