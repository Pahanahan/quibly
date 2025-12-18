import { useEffect } from "react";

export const useRoundTimer = (
  startGame: boolean,
  showRight: boolean,
  endGame: boolean,
  startTime: number,
  setShowRight: React.Dispatch<React.SetStateAction<boolean>>,
  setStartTime: React.Dispatch<React.SetStateAction<number>>,
  newRound: () => void
) => {
  useEffect(() => {
    if (!startGame || showRight || endGame) return;

    const timer = setTimeout(() => {
      if (startTime >= 11) {
        setShowRight(true);

        /////////////////////////////////
        // const obstructionRounds = [1, 2, 3];

        // if (obstructionRounds.includes(currentQuestion)) {
        //   setObstructions(true);
        //   setTimeout(() => {
        //     newRound();
        //   }, 7000);
        // } else {
        //   setTimeout(() => {
        //     newRound();
        //     setObstructions(false);
        //   }, 7000);
        // }
        /////////////////////////////////

        setTimeout(() => {
          newRound();
        }, 7000);
      }

      setStartTime((prevState) => {
        return prevState + 1;
      });
      return;
    }, 1000);

    return () => clearTimeout(timer);
  }, [
    startTime,
    setStartTime,
    startGame,
    showRight,
    setShowRight,
    endGame,
    newRound,
  ]);
};
