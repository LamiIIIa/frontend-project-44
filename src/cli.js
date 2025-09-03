import readlineSync from 'readline-sync';

export const askName = () => {
const name = readlineSync.question('May I have your name? ');

return name;
}

export const yourAnswer = () => {
    const answer = readlineSync.question('Your answer: ');

    return answer;
}
