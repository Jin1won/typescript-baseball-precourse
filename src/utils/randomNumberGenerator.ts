import { Random } from "@woowacourse/mission-utils";

const generateRandomNumber = (inputNumber) => {
  while (inputNumber.length < 3) {
    const randomNumber = Random.pickNumberInRange(1, 9) + "";
    if (!inputNumber.includes(randomNumber)) {
      inputNumber = inputNumber + randomNumber;
    }
  }
  console.log(inputNumber);
  return inputNumber;
};

export default generateRandomNumber;
