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

    if (!guess) {
        message('⛔ No number!')
    } else if (guess === secretNumber) {
        message('👏 Correct Number!')
    } else if (guess > secretNumber) {
        if (score > 1) {
            message('📈 Too high!')
            score--
            textScore(score)
        } else {
            textScore(0)
            message('😱 You lost the game!')
        }
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