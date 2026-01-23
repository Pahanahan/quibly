import { useEffect } from "react";

import { getDateNow } from "@/src/lib/getDateNow";
import { editRoom } from "@/src/lib/editRoom";
import { resetObstructions } from "../utils/resetObstructions";
import { resetCurrentScore } from "../utils/resetCurrentScore";

import { GamePhase, QuizPlayer, QuizQuestion } from "@/src/types/types";

const QUESTION_DURATION = 11000;
const ANSWER_DURATION = 7000;
const OBSTRUCTION_DURATION = 11000;
const MEMORY_DURATION = 11000;
const MEMORY_CHOOSE_DURATION = 16000;
const MEMORY_ANSWER_DURATION = 7000;
const SORTING_DURATION = 21000;
const SORTING_ANSWER_DURATION = 7000;

const obstructionRounds = [0, 2, 4, 8, 16];
const memoryRound = 10;
const sortingRound = [6, 12, 14];

export const useRoundTimer = (
  roomId: string | null,
  gamePhase: GamePhase | null,
  currentQuestion: number,
  startTimeRound: number,
  players: QuizPlayer[],
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>,
  questions: QuizQuestion[],
) => {
  useEffect(() => {
    if (!roomId) return;

    const newRound = () => {
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
            editRoom({
              roomId: roomId || null,
              key: "gamePhase",
              value: GamePhase.ANSWER,
            });
            editRoom({
              roomId: roomId || null,
              key: "startTimeRound",
              value: Date.now(),
            });
          }
        }, 500);
        break;
      }

      case GamePhase.ANSWER: {
        const isObstructionRound = obstructionRounds.includes(currentQuestion);

        const isMemoryRound = memoryRound === currentQuestion;

        const isSortingRound = sortingRound.includes(currentQuestion);

        interval = setInterval(() => {
          const dateNow = getDateNow();
          const endTime = startTimeRound + ANSWER_DURATION - dateNow;

          if (endTime <= 0) {
            if (isObstructionRound) {
              editRoom({
                roomId: roomId || null,
                key: "gamePhase",
                value: GamePhase.OBSTRUCTION,
              });
              editRoom({
                roomId: roomId || null,
                key: "startTimeRound",
                value: Date.now(),
              });

              return;
            } else if (isMemoryRound) {
              editRoom({
                roomId: roomId || null,
                key: "gamePhase",
                value: GamePhase.MEMORY,
              });
              editRoom({
                roomId: roomId || null,
                key: "startTimeRound",
                value: Date.now(),
              });

              return;
            } else if (isSortingRound) {
              editRoom({
                roomId: roomId || null,
                key: "gamePhase",
                value: GamePhase.SORTING,
              });
              editRoom({
                roomId: roomId || null,
                key: "startTimeRound",
                value: Date.now(),
              });

              return;
            } else {
              players.forEach((player) => {
                resetObstructions({
                  roomId: roomId || null,
                  player: player.id,
                });
              });
              editRoom({
                roomId: roomId || null,
                key: "gamePhase",
                value: GamePhase.QUESTION,
              });
              newRound();
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
            editRoom({
              roomId: roomId || null,
              key: "gamePhase",
              value: GamePhase.MEMORY_CHOOSE,
            });
            editRoom({
              roomId: roomId || null,
              key: "startTimeRound",
              value: Date.now(),
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
            editRoom({
              roomId: roomId || null,
              key: "gamePhase",
              value: GamePhase.MEMORY_ANSWER,
            });
            editRoom({
              roomId: roomId || null,
              key: "startTimeRound",
              value: Date.now(),
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
            editRoom({
              roomId: roomId || null,
              key: "gamePhase",
              value: GamePhase.QUESTION,
            });
            editRoom({
              roomId: roomId || null,
              key: "startTimeRound",
              value: Date.now(),
            });
            players.forEach((player) => {
              resetObstructions({
                roomId: roomId || null,
                player: player.id,
              });
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
            editRoom({
              roomId: roomId || null,
              key: "gamePhase",
              value: GamePhase.SORTING_ANSWER,
            });
            editRoom({
              roomId: roomId || null,
              key: "startTimeRound",
              value: Date.now(),
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
            editRoom({
              roomId: roomId || null,
              key: "gamePhase",
              value: GamePhase.QUESTION,
            });
            editRoom({
              roomId: roomId || null,
              key: "startTimeRound",
              value: Date.now(),
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
};
