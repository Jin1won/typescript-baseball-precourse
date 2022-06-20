import { RESULT_MESSAGES } from "../constants/constants";

const play = (
  computerRandomNumbers: string,
  userInputNumbers: string
): string => {
  let ball = 0;
  let strike = 0;

  for (let i = 0; i < computerRandomNumbers.length; i++) {
    for (let j = 0; j < userInputNumbers.length; j++) {
      if (computerRandomNumbers[i] === userInputNumbers[j]) {
        if (i === j) {
          strike++;
        } else {
          ball++;
        }
        break;
      }
    }
  }
  if (ball === 0 && strike === 0) {
    return RESULT_MESSAGES.NOTHING;
  } else if (ball === 0) {
    return `${strike}` + RESULT_MESSAGES.STRIKE;
  } else if (strike === 0) {
    return `${ball}` + RESULT_MESSAGES.BALL;
  } else {
    return (
      `${ball}` + RESULT_MESSAGES.BALL + `${strike}` + RESULT_MESSAGES.STRIKE
    );
  }
};

export default play;
