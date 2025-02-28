let roundCount = 0;
let humanScore = 0;
let computerScore = 0;
let gameActive = true;

function getComputerChoice() {
  let computerChoice;

  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = 'Rock';
  } else if (randomNumber === 2) {
    computerChoice = 'Paper';
  } else if (randomNumber === 3) {
    computerChoice = 'Scissors';
  }
  return computerChoice;
}

function getHumanChoice(message = 'Rock, paper or scissors?') {
  let humanChoice = prompt(message);

  if (humanChoice === null) {
    console.log('Game forfeited. Refresh to play again');
    gameActive = false;
    return null;
  } else {
    humanChoice = humanChoice.trim();
    humanChoice = capitalize(humanChoice);
  }

  if (
    humanChoice === 'Rock' ||
    humanChoice === 'Paper' ||
    humanChoice === 'Scissors'
  ) {
    return humanChoice;
  } else {
    return getHumanChoice('Try again: rock, paper or scissors?');
  }
}

function capitalize(string) {
  return string.at(1).toUpperCase() + string.slice(1).toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  console.log('Round', roundCount + 1);

  if (humanChoice === computerChoice) {
    console.log(`${humanChoice} vs ${computerChoice}. It's a tie!`);
  } else if (
    (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
    (humanChoice === 'Paper' && computerChoice === 'Rock') ||
    (humanChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    humanScore++;
    console.log(`${humanChoice} beats ${computerChoice}. You win!`);
  } else {
    computerScore++;
    console.log(`${computerChoice} beats ${humanChoice}. You lose!`);
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
      console.log(`The game is a tie!`);
    }
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
