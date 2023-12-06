let playerScore = 0
let computerScore = 0

function getComputerChoice () {
  const choices = ['rock', 'paper', 'scissors']
  const randomChoice = Math.floor(Math.random() * choices.length)
  return choices[randomChoice]
}

function getPlayerInput () {
  let playerInput = prompt('enter your choice')
  return playerInput.toLowerCase()
}

function playRound (playerSelection, computerSelection) {
  let message = ''
  if (playerSelection === computerSelection) {
    message = 'TIE!'
  } else if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'scissors' && computerSelection === 'rock') ||
    (playerSelection === 'paper' && computerSelection === 'scissors')
  ) {
    computerScore += 1
    message = `You Lose! ${computerSelection} beats ${playerSelection}`
  } else if (
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore += 1
    message = `You Win! ${playerSelection} beats ${computerSelection}`
  }

  return message
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

game()
