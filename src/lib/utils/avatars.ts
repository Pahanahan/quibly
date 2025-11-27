import { StaticImageData } from "next/image";

import ape from "@/public/quiz-avatar/ape.svg";
import bird from "@/public/quiz-avatar/bird.svg";
import bull from "@/public/quiz-avatar/bull.svg";
import dog from "@/public/quiz-avatar/dog.svg";
import camel from "@/public/quiz-avatar/camel.svg";
import cat from "@/public/quiz-avatar/cat.svg";
import horse from "@/public/quiz-avatar/horse.svg";
import rabbit from "@/public/quiz-avatar/rabbit.svg";
import cow from "@/public/quiz-avatar/cow.svg";
import duck from "@/public/quiz-avatar/duck.svg";
import elephant from "@/public/quiz-avatar/elephant.svg";
import fish from "@/public/quiz-avatar/fish.svg";
import goose from "@/public/quiz-avatar/goose.svg";
import giraffe from "@/public/quiz-avatar/giraffe.svg";
import lion from "@/public/quiz-avatar/lion.svg";
import mouse from "@/public/quiz-avatar/mouse.svg";
import turtle from "@/public/quiz-avatar/turtle.svg";
import tiger from "@/public/quiz-avatar/tiger.svg";
import zebra from "@/public/quiz-avatar/zebra.svg";

export const avatars: Record<string, StaticImageData> = {
  ape,
  bird,
  bull,
  dog,
  camel,
  cat,
  horse,
  rabbit,
  cow,
  duck,
  elephant,
  fish,
  goose,
  giraffe,
  lion,
  mouse,
  turtle,
  tiger,
  zebra,
};

export type AvatarKey = keyof typeof avatars;
