const rand = (max = 1, min = 21) => {
    return Math.floor(Math.random() * (max - min) + min)
}
const secretNumber = rand()
document.querySelector('.number').textContent = secretNumber

const message = message => {
    document.querySelector('.message').textContent = message
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
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.score').textContent = 0
            message('😱 You lost the game!')
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            message('📉 Too low!')
            score--
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.score').textContent = 0
            message('😱 You lost the game!')
        }
    }
})