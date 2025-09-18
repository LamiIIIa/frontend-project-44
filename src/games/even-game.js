import { yourAnswer } from '../cli.js'
import { randomNumber } from '../helper.js'

const evenGame = {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  getQuestion: () => {
    const number = randomNumber()
    return { number, text: number }
  },
  getAnswer: () => {
    return yourAnswer()
  },
  getDecision: (question) => {
    return question.number % 2 === 0 ? 'yes' : 'no'
  },
}

export default evenGame
