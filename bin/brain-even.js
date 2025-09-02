
import { askName, randomNumber, yourAnswer, evenQuestion, printUncorrect, printCorrect, printFinish } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askName();
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let correctAnswer = 0;
while (correctAnswer < 3) {
  let  number = randomNumber();
  evenQuestion(number);
  let answer = yourAnswer();
  const desigion = number % 2 === 0 ? 'yes' : 'no';
  if (answer === desigion){
    printCorrect();
    correctAnswer += 1;
  } else {
    printUncorrect(answer, desigion, name);
    break;
  }
printFinish(name);
}

