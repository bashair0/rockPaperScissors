let playerScore = 0
let houseScore = 0
let message = ''

const radioButtons = document.querySelectorAll('input[name="choice"]')
const playerScoreResult = document.querySelector('.player-score')
const houseScoreResult = document.querySelector('.house-score')
const resultMsg = document.querySelector('.result-msg')

function getHouseChoice () {
  const choices = ['rock', 'paper', 'scissors']
  const randomChoice = Math.floor(Math.random() * choices.length)
  return choices[randomChoice]
}

function getPlayerChoice () {
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
  let playerSelection = getPlayerChoice()
  playRound(playerSelection, houseSelection)
}

function reset () {
  playerScore = 0
  houseScore = 0
  message = 'result'
  playerScoreResult.textContent = playerScore
  houseScoreResult.textContent = houseScore
  resultMsg.textContent = message
  playerScoreResult.classList.remove('clr-winScore-text')
  houseScoreResult.classList.remove('clr-winScore-text')
  replayBtn.classList.remove('display-block')
}

radioButtons.forEach(button => {
  button.addEventListener('click', () => {
    let winnerScore = 5
    if (playerScore === winnerScore) {
      playerScoreResult.classList.add('clr-winScore-text')
      replayBtn.classList.add('display-block')
      message = 'You won the game! congrats'
    } else if (houseScore === winnerScore) {
      houseScoreResult.classList.add('clr-winScore-text')
      replayBtn.classList.add('display-block')
      message = 'You lost the game! best luck next time'
    } else {
      game()
    }
    playerScoreResult.textContent = playerScore
    houseScoreResult.textContent = houseScore
    resultMsg.textContent = message
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
