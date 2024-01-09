let playerScore = 0
let houseScore = 0
let message = ''

const radioButtons = document.querySelectorAll('input[name="choice"]')
const playerScoreResult = document.querySelector('.player-score')
const houseScoreResult = document.querySelector('.house-score')
const resultMsg = document.querySelector('.result-msg')

/* get custom property color values */
const rootStyles = getComputedStyle(document.documentElement)
const primaryRed = rootStyles.getPropertyValue('--clr-primary-red')
const neutralGrey = rootStyles.getPropertyValue('--clr-neutral-700')

function getHouseChoice () {
  const choices = ['rock', 'paper', 'scissors']
  const randomChoice = Math.floor(Math.random() * choices.length)
  return choices[randomChoice]
}

function getPlayerInput () {
  const selectedRadio = document.querySelector('input[name="choice"]:checked')

  // Get the value of the selected radio button
  const selectedValue = selectedRadio.value
  return selectedValue
}

function playRound (playerSelection, houseSelection) {
  if (playerSelection === houseSelection) {
    message = "it's a TIE!"
  } else if (
    (playerSelection === 'rock' && houseSelection === 'paper') ||
    (playerSelection === 'scissors' && houseSelection === 'rock') ||
    (playerSelection === 'paper' && houseSelection === 'scissors')
  ) {
    houseScore += 1
    message = `You Lose! ${houseSelection} beats ${playerSelection}`
  } else if (
    (playerSelection === 'paper' && houseSelection === 'rock') ||
    (playerSelection === 'rock' && houseSelection === 'scissors') ||
    (playerSelection === 'scissors' && houseSelection === 'paper')
  ) {
    playerScore += 1
    message = `You Win! ${playerSelection} beats ${houseSelection}`
  }
}

function game () {
  let houseSelection = getHouseChoice()
  let playerSelection = getPlayerInput()
  playRound(playerSelection, houseSelection)
  playerScoreResult.textContent = playerScore
  houseScoreResult.textContent = houseScore
  resultMsg.textContent = message
}

function reset () {
  playerScore = 0
  houseScore = 0
  message = 'result'
  playerScoreResult.textContent = playerScore
  houseScoreResult.textContent = houseScore
  resultMsg.textContent = message
  playerScoreResult.style.color = neutralGrey
  houseScoreResult.style.color = neutralGrey
  replayBtn.classList.remove('display-block')
}

radioButtons.forEach(button => {
  button.addEventListener('click', () => {
    let winnerScore = 5
    if (playerScore === winnerScore) {
      playerScoreResult.style.color = 'red'
      replayBtn.classList.add('display-block')
    } else if (houseScore === winnerScore) {
      houseScoreResult.style.color = 'red'
      replayBtn.classList.add('display-block')
    } else {
      game()
    }
  })
})

/* DISPLAY AND REMOVE RULES  */
const closeBtn = document.querySelector('.close-icon')
const rulesBtn = document.querySelector('.rules-btn')
const rulesDiv = document.querySelector('.rules-background')

closeBtn.addEventListener('click', () => {
  rulesDiv.classList.toggle('display-none')
})
rulesBtn.addEventListener('click', () => {
  rulesDiv.classList.toggle('display-none')
})

/* PLAY AGAIN BUTTON  */
const replayBtn = document.querySelector('.replay-btn')

replayBtn.addEventListener('click', reset)
