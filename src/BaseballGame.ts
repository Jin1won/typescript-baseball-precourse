import generateRandomNumber from "./utils/randomNumberGenerator";
import play from "./utils/play";
import { INPUT_CONSTANTS, ERROR_MESSAGES } from "./constants/constants";

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
          if (inputValue.length !== INPUT_CONSTANTS.LENGTH) {
            alert(ERROR_MESSAGES.NOT_PROPER_LENGTH);
            return;
          }
          const set = new Set(inputValue);
          if (set.size !== INPUT_CONSTANTS.LENGTH) {
            alert(ERROR_MESSAGES.DUPLICATION);
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
