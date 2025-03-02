let roundCount = 0;
let humanScore = 0;
let computerScore = 0;
let gameActive = true;

function getComputerChoice() {
  let computerChoice;

  let random = Math.floor(Math.random() * 3) + 1;

  if (random === 1) {
    computerChoice = 'rock';
  } else if (randomNumber === 2) {
    computerChoice = 'paper';
  } else if (randomNumber === 3) {
    computerChoice = 'scissors';
  }

  return computerChoice;
}

function getHumanChoice(message = 'Rock, paper or scissors?') {
  let humanChoice = prompt(message);

  if (humanChoice === null) {
    console.log('Game forfeited. Reload to play again!');
    gameActive = false;
    return null;
  } else {
    humanChoice = humanChoice.trim().toLowerCase();
  }

  if (
    humanChoice === 'rock' ||
    humanChoice === 'paper' ||
    humanChoice === 'scissors'
  ) {
    return humanChoice;
  } else {
    return getHumanChoice('Try again: rock, paper or scissors?');
  }
}

// Format first choice in round
function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  console.log('Round', roundCount + 1);

  if (humanChoice === computerChoice) {
    console.log(
      `${capitalize(humanChoice)} vs ${computerChoice}. It's a draw!`
    );
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    console.log(`${capitalize(humanChoice)} beats ${computerChoice}. You win!`);
  } else {
    computerScore++;
    console.log(
      `${capitalize(computerChoice)} beats ${humanChoice}. You lose!`
    );
  }

  roundCount++;
  console.log(`You ${humanScore} | Computer ${computerScore}`);
}

function playNextRound() {
  if (gameActive && roundCount < 5) {
    const humanPick = getHumanChoice();

    if (gameActive) {
      const computerPick = getComputerChoice();

      playRound(humanPick, computerPick);

      playNextRound();
    }
  } else {
    console.log('Game over');
    if (humanScore > computerScore) {
      console.log('You won the game!');
    } else if (humanScore < computerScore) {
      console.log('You lost the game!');
    } else {
      console.log(`The game is a draw!`);
    }
    console.log('Reload to play again');
  }
}

function playGame() {
  // reset everything
  roundCount = 0;
  humanScore = 0;
  computerScore = 0;
  gameActive = true;

  playNextRound();
}

playGame();
