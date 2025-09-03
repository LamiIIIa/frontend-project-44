#!/usr/bin/env node

import { printUncorrect, printCorrect, printFinish, sayHello, evenQuestion } from '../src/helper.js'


const gameLaunch = (gameLogic) => {
const name = sayHello();
console.log(gameLogic.description);

let correctAnswer = 0;
const rounds = 3;
while (correctAnswer < rounds) {
    const question = gameLogic.getQuestion();
    evenQuestion(question.text);
    const answer = gameLogic.getAnswer();

    const decision = gameLogic.getDecision(question);

    if (decision === answer){
        printCorrect();
    correctAnswer += 1;
    } else {
        printUncorrect(answer, decision, name);
    break;
    }
    if (correctAnswer === rounds) {
        printFinish(name);
      }
}


}

export default gameLaunch;