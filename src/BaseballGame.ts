const BaseballGame = () => {
  let visible = false;
  document.getElementById("result-success").style.visibility = "hidden";

  const play = (
    computerInputNumbers: string,
    userInputNumbers: string
  ): string => {
    if (computerInputNumbers === userInputNumbers) {
      visible = true;
      return;
    }

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

  const result = document.getElementById("result");
  const userInput = document.getElementById(
    "user-input"
  ) as HTMLInputElement | null;

  document.getElementById("app").addEventListener("click", (event) => {
    const clickedTarget = event.target as HTMLInputElement | null;
    switch (clickedTarget.textContent) {
      case "확인":
        event.preventDefault();
        if (userInput != null) {
          const inputValue = userInput.value;
          result.innerHTML = play("123", inputValue);
        }
        if (visible) {
          result.innerHTML = "";
          document.getElementById("result-success").style.visibility =
            "visible";
        }
        break;
      case "게임 재시작":
        visible = false;
        document.getElementById("result-success").style.visibility = "hidden";
        userInput.value = "";
    }
  });
};

export default BaseballGame;
