import generateRandomNumber from "./utils/randomNumberGenerator";
import play from "./utils/play";

const BaseballGame = () => {
  let visible = false;
  document.getElementById("result-success").style.visibility = "hidden";

  const result = document.getElementById("result") as HTMLInputElement | null;
  const userInput = document.getElementById(
    "user-input"
  ) as HTMLInputElement | null;

  let computerRandomNumber: string = "";

  computerRandomNumber = generateRandomNumber(computerRandomNumber);

  document.getElementById("app").addEventListener("click", (event) => {
    const clickedTarget = event.target as HTMLInputElement | null;
    switch (clickedTarget.textContent) {
      case "확인":
        event.preventDefault();
        if (userInput != null) {
          const inputValue = userInput.value;
          if (inputValue.length !== 3) {
            alert("숫자를 3개 입력하세요");
            return;
          }
          const set = new Set(inputValue);
          if (set.size !== 3) {
            alert("숫자를 중복 없이 입력하세요");
            return;
          }

          if (computerRandomNumber === inputValue) {
            visible = true;
          } else {
            result.innerHTML = play(computerRandomNumber, inputValue);
          }
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
        computerRandomNumber = "";
        computerRandomNumber = generateRandomNumber(computerRandomNumber);
    }
  });
};

export default BaseballGame;
