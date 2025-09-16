import { yourAnswer } from '../src/cli.js'
import { randomNumber } from '../src/helper.js'

const primeGame = {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no"',
  getQuestion: () => {
    const number = randomNumber()
    return { number, text: number }
  },
  getAnswer: () => {
    return yourAnswer()
  },
  getDecision: (question) => {
    if (question.number < 2) {
      return 'no'
    }
    if (question.number === 2) {
      return 'yes'
    }
    if (question.number % 2 === 0) {
      return 'no'
    }

    const limit = Math.sqrt(question.number)
    for (let i = 3; i < limit; i += 2) {
      if (question.number % i === 0) {
        return 'no'
      }
    }

    return 'yes'
  },
}

export default primeGame
