import { yourAnswer } from "../src/cli.js";
import { randomNumber, getRandomOperation } from "../src/helper.js";

const calcGame = {
  description: "What is the result of the expression?",
  getQuestion: () => {
    const num1 = randomNumber();
    const num2 = randomNumber();
    const operation = getRandomOperation();
    return { num1, num2, operation, text: `${num1} ${operation} ${num2}` };
  },
  getAnswer: () => {
    return Number(yourAnswer());
  },
  getDecision: (question) => {
    const { num1, num2, operation } = question;

    switch (operation) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      default:
        throw new Error(`Unknown operator: ${operation}`);
    }
  },
};

export default calcGame;
