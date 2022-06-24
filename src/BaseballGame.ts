import randomNumberGenerator from "./utils/randomNumberGenerator";
import play from "./utils/play";
import {
  INPUT_CONSTANTS,
  ERROR_MESSAGES,
  SELECTOR,
  BUTTON_CASE,
} from "./constants/constants";

const BaseballGame = () => {
  let visible = false;
  document.getElementById(SELECTOR.RESULT_SUCCESS).style.visibility = "hidden";

  const result = document.getElementById(
    SELECTOR.RESULT
  ) as HTMLInputElement | null;
  const userInput = document.getElementById(
    SELECTOR.USER_INPUT
  ) as HTMLInputElement | null;

  let computerRandomNumber: string = "";

  computerRandomNumber = randomNumberGenerator(computerRandomNumber);

  document.getElementById(SELECTOR.APP).addEventListener("click", (event) => {
    const clickedTarget = event.target as HTMLInputElement | null;
    switch (clickedTarget.textContent) {
      case BUTTON_CASE.ENTER:
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
          document.getElementById(SELECTOR.RESULT_SUCCESS).style.visibility =
            "visible";
        }
        break;
      case BUTTON_CASE.RESTART:
        visible = false;
        document.getElementById(SELECTOR.RESULT_SUCCESS).style.visibility =
          "hidden";
        userInput.value = "";
        computerRandomNumber = "";
        computerRandomNumber = generateRandomNumber(computerRandomNumber);
    }
  });
};

export default BaseballGame;
