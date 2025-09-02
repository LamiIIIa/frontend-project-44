import readlineSync from 'readline-sync';

export const askName = () => {
const name = readlineSync.question('May I have your name? ');

return name;
}

export const randomNumber = (min = 1, max = 100) => {
    
    return Math.floor(Math.random() * (max - 1 + min) + min);
}

export const yourAnswer = () => {
    const answer = readlineSync.question('Your answer: ');

    return answer;
}

export const evenQuestion = (number) => {
    console.log(`Question: ${number}`);
}

export const printCorrect = () => {
    console.log('Correct!');
}

export const printUncorrect = (answer, desigion, name) => {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${desigion}.\n Let's try again, ${name}!` )
}

export const printFinish = (name) => {
    console.log(`Congratulations, ${name}!`);
}