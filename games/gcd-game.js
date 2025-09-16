import { yourAnswer } from '../src/cli.js'
import { randomNumber } from '../src/helper.js'

const gcdGame = {
  description: 'Find the greatest common divisor of given numbers.',
  getQuestion: () => {
    const num1 = randomNumber()
    const num2 = randomNumber()
    return { num1, num2, text: `${num1} ${num2}` }
  },
  getAnswer: () => {
    return Number(yourAnswer())
  },
  getDecision: (question) => {
    const { num1, num2 } = question
    let a = num1 >= num2 ? num1 : num2
    let b = num1 >= num2 ? num2 : num1
    while (b !== 0) {
      const b2 = b
      b = a % b
      a = b2
    }

    return a
  },
}

export default gcdGame
