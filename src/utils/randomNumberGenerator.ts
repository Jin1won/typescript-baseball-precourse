import { Random } from "@woowacourse/mission-utils";
import { INPUT_CONSTANTS } from "../constants/constants";

const randomNumberGenerator = (inputNumber): string => {
  while (inputNumber.length < INPUT_CONSTANTS.LENGTH) {
    const randomNumber =
      Random.pickNumberInRange(
        INPUT_CONSTANTS.RANGE_MIN,
        INPUT_CONSTANTS.RANGE_MAX
      ) + "";
    if (!inputNumber.includes(randomNumber)) {
      inputNumber = inputNumber + randomNumber;
    }
  }
  return inputNumber;
};

export default randomNumberGenerator;
