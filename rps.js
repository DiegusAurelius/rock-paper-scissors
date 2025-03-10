const results = document.querySelector('.results');
const weaponButtons = document.querySelectorAll('.weapon');
const para = document.querySelector('.para');
const human = document.querySelector('.human');
const computer = document.querySelector('.computer');
const draw = document.querySelector('.draw');
const buttons = document.querySelector('.buttons');

human.textContent = draw.textContent = computer.textContent = 0;

let humanChoice;
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

  updateScoreBoard();

  if (humanScore === 5 || computerScore === 5) {
    endGame();
  }
}

function endGame() {
  let newPara = document.createElement('p');
  newPara.classList.add('bold');

  if (humanScore > computerScore) {
    newPara.textContent = 'You won the game';
    human.style.color = `hsl(120, 85%, 30%)`;
    computer.style.color = `hsl(0, 85%, 50%)`;
  } else if (humanScore < computerScore) {
    newPara.textContent = 'You lost the game';
    human.style.color = `hsl(0, 85%, 50%)`;
    computer.style.color = `hsl(120, 85%, 30%)`;
  } else {
    newPara.textContent = 'The game is a draw';
  }

  results.appendChild(newPara);

  const resetButton = document.createElement('button');
  resetButton.textContent = 'Play again';
  resetButton.classList.add('resetBtn');
  resetButton.addEventListener('click', () => {
    resetButton.remove();
    newPara.remove();
    resetGame();
  });

  results.appendChild(resetButton);

  weaponButtons.forEach((button) => (button.disabled = true));
}

function playNextRound() {
  const computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice);
}

function updateScoreBoard() {
  human.style.removeProperty('color');
  computer.style.removeProperty('color');
  human.textContent = humanScore;
  draw.textContent = drawScore;
  computer.textContent = computerScore;
}

function resetGame() {
  humanScore = drawScore = computerScore = 0;
  updateScoreBoard();
  para.textContent = 'Choose an option';
  weaponButtons.forEach((button) => {
    button.disabled = false;
  });
}
