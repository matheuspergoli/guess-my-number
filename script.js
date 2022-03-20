const rand = (max = 1, min = 21) => {
    return Math.floor(Math.random() * (max - min) + min)
}
const secretNumber = rand()
document.querySelector('.number').textContent = secretNumber

const message = message => {
    document.querySelector('.message').textContent = message
}

const textScore = text => {
    document.querySelector('.score').textContent = text
}
let score = 20

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value)

    // When there is no input
    if (!guess) {
        message('⛔ No number!')

      // When player wins  
    } else if (guess === secretNumber) {
        message('👏 Correct Number!')

        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'

      // When guess is to high  
    } else if (guess > secretNumber) {
        if (score > 1) {
            message('📈 Too high!')
            score--
            textScore(score)
        } else {
            textScore(0)
            message('😱 You lost the game!')
        }

      // When guess is too low  
    } else if (guess < secretNumber) {
        if (score > 1) {
            message('📉 Too low!')
            score--
            textScore(score)
        } else {
            textScore(0)
            message('😱 You lost the game!')
        }
    }
})