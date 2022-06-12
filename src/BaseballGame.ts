const BaseballGame = () => {
  const play = (
    computerInputNumbers: number,
    userInputNumbers: number
  ): string => {
    let ball = 0;
    let strike = 0;

    const strComputerInputNumbers = computerInputNumbers.toString();
    const strUserInputNumbers = userInputNumbers.toString();
    ``;

    for (let i = 0; i < strComputerInputNumbers.length; i++) {
      for (let j = 0; j < strUserInputNumbers.length; j++) {
        if (strComputerInputNumbers[i] === strUserInputNumbers[j]) {
          if (i === j) {
            strike++;
          } else {
            ball++;
          }
          break;
        }
      }
    }

    return `${ball}볼 ${strike}스트라이크`;
  };

  const result = document.getElementById("result");

  document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();
    result.innerHTML = play(453, 456);
  });
};

export default BaseballGame;
