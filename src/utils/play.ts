const play = (
  computerInputNumbers: string,
  userInputNumbers: string
): string => {
  let ball = 0;
  let strike = 0;

  for (let i = 0; i < computerInputNumbers.length; i++) {
    for (let j = 0; j < userInputNumbers.length; j++) {
      if (computerInputNumbers[i] === userInputNumbers[j]) {
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
    return "낫싱";
  } else if (ball === 0) {
    return `${strike}스트라이크`;
  } else if (strike === 0) {
    return `${ball}볼`;
  } else {
    return `${ball}볼 ${strike}스트라이크`;
  }
};

export default play;
