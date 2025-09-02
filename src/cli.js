import readlineSync from 'readline-sync';

export const askName = () => {
const name = readlineSync.question('May I have your name? ');

console.log(`Hello, ${name}!`);
}

export const randomNumber = (min = 1, max = 100) => {
    
    return Math.floor(Math.random() * (max - 1 + min) + min);
}

export const yourAnswer = () => {
    const answer = readlineSync.question('Your answer: ');

    return answer;
}