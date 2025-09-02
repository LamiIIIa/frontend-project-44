#!/usr/bin/env node

import { askName, randomNumber, yourAnswer, evenQuestion, printUncorrect, printCorrect, printFinish } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askName();
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let correctAnswer = 0;
while (correctAnswer < 3) {
  const  number = randomNumber();
  evenQuestion(number);
  const answer = yourAnswer();
  const decision = number % 2 === 0 ? 'yes' : 'no';
  
  if (answer === decision){
    printCorrect();
    correctAnswer += 1;
  } else {
    printUncorrect(answer, decision, name);
    break;
  } 
  if (correctAnswer === 3){
printFinish(name);
  }
}

