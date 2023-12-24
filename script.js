let playerScore = 0
let computerScore = 0
let message = ''
function getComputerChoice () {
  const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']
  const randomChoice = Math.floor(Math.random() * choices.length)
  return choices[randomChoice]
}

function getPlayerInput () {
  const selectedRadio = document.querySelector('input[name="choice"]:checked')

  // Get the value of the selected radio button
  const selectedValue = selectedRadio.value
  return selectedValue
}

function playRound (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    message = "it's a TIE!"
  } else if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'scissors' && computerSelection === 'rock') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'lizard' && computerSelection === 'rock') ||
    (playerSelection === 'spock' && computerSelection === 'lizard') ||
    (playerSelection === 'scissors' && computerSelection === 'spock') ||
    (playerSelection === 'lizard' && computerSelection === 'scissors') ||
    (playerSelection === 'spock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'lizard') ||
    (playerSelection === 'rock' && computerSelection === 'spock')
  ) {
    computerScore += 1
    message = `You Lose! ${computerSelection} beats ${playerSelection}`
  } else if (
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'rock' && computerSelection === 'lizard') ||
    (playerSelection === 'lizard' && computerSelection === 'spock') ||
    (playerSelection === 'spock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'lizard') ||
    (playerSelection === 'paper' && computerSelection === 'spock') ||
    (playerSelection === 'lizard' && computerSelection === 'paper') ||
    (playerSelection === 'spock' && computerSelection === 'rock')
  ) {
    playerScore += 1
    message = `You Win! ${playerSelection} beats ${computerSelection}`
  }
}

function game () {
  let winnerScore = 5
  let endGame

  while (!endGame) {
    let computerSelection = getComputerChoice()
    let playerSelection = getPlayerInput()
    console.log(playRound(playerSelection, computerSelection))
    console.log(`player score ${playerScore}`)
    console.log(`computer score ${computerScore}`)
    if (playerScore === winnerScore || computerScore === winnerScore) {
      endGame = true
    }
  }
}

const selectedRadio = document.querySelectorAll('input[name="choice"]')
const playerScoreResult = document.querySelector('.player-score')
const computerScoreResult = document.querySelector('.computer-score')
const resultMsg = document.querySelector('.result-msg')

selectedRadio.forEach(radio => {
  radio.addEventListener('click', () => {
    let computerSelection = getComputerChoice()
    let playerSelection = getPlayerInput()
    playRound(playerSelection, computerSelection)
    playerScoreResult.textContent = playerScore
    computerScoreResult.textContent = computerScore
    resultMsg.textContent = message
  })
})

const closeBtn = document.querySelector('.close-icon')
const rulesBtn = document.querySelector('.rules-btn')
const rulesDiv = document.querySelector('.rules-background')

closeBtn.addEventListener('click', () => {
  rulesDiv.classList.add('display-none')
})
rulesBtn.addEventListener('click', () => {
  rulesDiv.classList.remove('display-none')
})
