const INPUT_CONSTANTS = { RANGE_MIN: 1, RANGE_MAX: 9, LENGTH: 3 };

const ERROR_MESSAGES = {
  NOT_PROPER_LENGTH: "숫자를 3개 입력하세요",
  DUPLICATION: "숫자를 중복 없이 입력하세요",
};

const RESULT_MESSAGES = { NOTHING: "낫싱", BALL: "볼", STRIKE: "스트라이크" };

const SELECTOR = {
  RESULT: "result",
  RESULT_SUCCESS: "result-success",
  USER_INPUT: "user-input",
  APP: "app",
};

const BUTTON_CASE = { ENTER: "확인", RESTART: "게임 재시작" };

export {
  INPUT_CONSTANTS,
  ERROR_MESSAGES,
  RESULT_MESSAGES,
  SELECTOR,
  BUTTON_CASE,
};
