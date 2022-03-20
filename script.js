// Função para gerar um número aleatório entre 1 e 20
const rand = (max = 1, min = 20) => {
    return Math.floor(Math.random() * (max - min) + min)
}
let secretNumber = rand()

// Função para manipular o width do número a ser descoberto
const secretNumberWidth = width => {
    document.querySelector('.number').style.width = width
}

// Função para mandar uma mensagem para o player de vitória ou derrota ou erro
const message = message => {
    document.querySelector('.message').textContent = message
}

// Função para manipular o background-color do body
const bgColor = color => {
    document.querySelector('body').style.backgroundColor = color
}

// Função para mostrar o score do player
const textScore = text => {
    document.querySelector('.score').textContent = text
}
let score = 20

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value)

    // Quando não tiver nada no input
    if (!guess) {
        message('⛔ No number!')

      // Quando o player ganhar
    } else if (guess === secretNumber) {
        message('👏 Correct Number!')
        bgColor('#60b347')
        secretNumberWidth('30rem')
        document.querySelector('.number').textContent = secretNumber

      // Quando o palpite é muito alto  
    } else if (guess > secretNumber) {
        if (score > 1) {
            message('📈 Too high!')
            score--
            textScore(score)
        } else {
            textScore(0)
            message('😱 You lost the game!')
        }

      // Quando o palpite é muito baixo  
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

// Criando funcionalidade para jogar de novo, resetando todos os valores
document.querySelector('.again').addEventListener('click', () => {
    textScore(20)
    bgColor('#222')
    secretNumber = rand()
    secretNumberWidth('15rem')
    message('Start guessing...')
    document.querySelector('.guess').value = ''
    document.querySelector('.number').textContent = '?'
})