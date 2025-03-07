let results = document.querySelector('.results');
let para = document.createElement('p');
let human = document.querySelector('.human');
let computer = document.querySelector('.computer');
let draw = document.querySelector('.draw');
para.textContent = 'Select your weapon';
results.appendChild(para);
human.textContent = 0;
draw.textContent = 0;
computer.textContent = 0;
let round = 0;
let roundCount = 0;
let humanScore = 0;
let drawScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice;

  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = 'rock';
  } else if (randomNumber === 2) {
    computerChoice = 'paper';
  } else if (randomNumber === 3) {
    computerChoice = 'scissors';
  }

  return computerChoice;
}

let humanChoice;

const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (e) => {
  switch (e.target.textContent) {
    case 'Rock':
      humanChoice = 'rock';
      playNextRound();
      break;
    case 'Paper':
      humanChoice = 'paper';
      playNextRound();
      break;
    case 'Scissors':
      humanChoice = 'scissors';
      playNextRound();
      break;
  }
});

// Format first choice in round
function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    drawScore++;

    para.textContent = `${capitalize(
      humanChoice
    )} vs ${computerChoice}. It's a draw!`;
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    para.textContent = `${capitalize(
      humanChoice
    )} beats ${computerChoice}. You win!`;
  } else {
    computerScore++;
    para.textContent = `${capitalize(
      computerChoice
    )} beats ${humanChoice}. You lose!`;
  }

  roundCount++;
  human.textContent = humanScore;
  draw.textContent = drawScore;
  computer.textContent = computerScore;

  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      para.textContent = 'You won the game!';
    } else if (humanScore < computerScore) {
      para.textContent = 'You lost the game!';
    } else {
      para.textContent = `The game is a draw!`;
    }
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Play again';
    resetButton.classList.add('resetBtn');
    resetButton.addEventListener('click', () => {
      resetButton.remove();
      resetGame();
    });
    results.appendChild(resetButton);
    document.querySelectorAll('.weapon').forEach((button) => {
      button.disabled = true;
    });
  }
}

function playNextRound() {
  const humanPick = humanChoice;

  const computerPick = getComputerChoice();

  playRound(humanPick, computerPick);
}

function resetGame() {
  // reset everything
  roundCount = 0;
  humanScore = 0;
  drawScore = 0;
  computerScore = 0;
  human.textContent = 0;
  draw.textContent = 0;
  computer.textContent = 0;
  para.textContent = 'Select your weapon';
  document.querySelectorAll('.weapon').forEach((button) => {
    button.disabled = false;
  });
}
