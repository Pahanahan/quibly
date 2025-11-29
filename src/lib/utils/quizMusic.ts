import { Howl } from "howler";

export const quizMusic = (src: string, loop: boolean, volume: number) => {
  return new Howl({
    src: [src],
    loop: loop,
    volume: volume,
  });
};
