#!/usr/bin/env node
import { printUncorrect, printCorrect, printFinish, printQuestion } from '../src/helper.js'
import { askName } from '../src/cli.js'
const gameLaunch = (gameLogic) => {
 console.log('Welcome to the Brain Games!');
const name = askName();
console.log(`Hello, ${name}!`);
console.log(gameLogic.description);
let correctAnswer = 0;
const rounds = 3;
while (correctAnswer < rounds) {
    const question = gameLogic.getQuestion();
    printQuestion(question.text);
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
