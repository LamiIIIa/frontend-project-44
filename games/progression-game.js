import { yourAnswer } from "../src/cli.js";
import { randomNumber, currentElement } from "../src/helper.js";

const progGame = {
  description: "What number is missing in the progression?",

  getQuestion: () => {
    const array = [];

    const step = Math.floor(Math.random() * 10) + 1;
    const start = randomNumber();

    for (let i = 0; i < 10; i++) {
      array.push(currentElement(i, step, start));
    }

    const secretIndex = Math.floor(Math.random() * array.length);
    const secretNum = array[secretIndex];
    array[secretIndex] = "..";

    return { secretNum, text: array.join(" ") };
  },

  getAnswer: () => {
    return Number(yourAnswer());
  },

  getDecision: (question) => {
    return question.secretNum;
  },
};

export default progGame;
