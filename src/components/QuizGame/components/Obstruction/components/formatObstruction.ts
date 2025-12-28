import fadeIn from "public/quiz-icons/fadeIn.svg";
import scale from "public/quiz-icons/scale.svg";
import blurIn from "public/quiz-icons/blurIn.svg";
import rotate from "public/quiz-icons/rotate.svg";
import helicopter from "public/quiz-icons/helicopter.svg";
import pulse from "public/quiz-icons/pulse.svg";
import shake from "public/quiz-icons/shake.svg";
import defender from "public/quiz-icons/defender.svg";
import x2 from "public/quiz-icons/x2.svg";
import x5 from "public/quiz-icons/x5.svg";
import x10 from "public/quiz-icons/x10.svg";

export const formatObstruction = (key: string, value: boolean | number) => {
  if (!value) return "";

  switch (key) {
    case "fadeIn": {
      return fadeIn;
    }
    case "scale": {
      return scale;
    }
    case "blurIn": {
      return blurIn;
    }
    case "rotate": {
      return rotate;
    }
    case "helicopter": {
      return helicopter;
    }
    case "pulse": {
      return pulse;
    }
    case "shake": {
      return shake;
    }
    case "defender": {
      return defender;
    }
    case "x2": {
      return x2;
    }
    case "x5": {
      return x5;
    }
    case "x10": {
      return x10;
    }
  }
};
