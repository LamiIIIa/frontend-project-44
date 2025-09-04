import { askName } from '../src/cli.js'

export const randomNumber = (min = 1, max = 100) => {
    
    return Math.floor(Math.random() * (max - 1 + min) + min);
}

export const evenQuestion = (number) => {
    console.log(`Question: ${number}`);
}

export const printCorrect = () => {
    console.log('Correct!');
}

export const printUncorrect = (answer, decision, name) => {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${decision}".\n Let's try again, ${name}!` )
}

export const printFinish = (name) => {
    console.log(`Congratulations, ${name}!`);
}

export const getRandomOperation = () => {
    const operations = [`+`, `-`, `*`];
    const randomIndex = Math.floor(Math.random() * operations.length);
    return operations[randomIndex];
}

export const sayHello = () => {
    console.log('Welcome to the Brain Games!');
const name = askName();
console.log(`Hello, ${name}!`);
}