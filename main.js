function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  let computerChoice = '';
  if (randomNum === 1) {
    computerChoice = 'rock';
  } else if (randomNum === 2) {
    computerChoice = 'paper';
  } else if (randomNum === 3) {
    computerChoice = 'scissors';
  }
  return computerChoice;
}

function getHumanChoice(message = 'Choose') {
  let humanChoice = prompt(message).toLowerCase().trim();
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let roundCounter = 0;
  const computerSelection = getComputerChoice();
  const humanSelection = getHumanChoice();

  function playRound(humanChoice, computerChoice) {
    roundCounter++;
    console.log('Round: ', roundCounter);

    if (humanChoice === computerChoice) {
      console.log(`It's a tie`);
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
      console.log('Paper beats rock! You lose');
      computerScore += 1;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
      console.log('Paper beats rock! You win');
      humanScore += 1;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
      console.log('Scissors beats paper! You win');
      humanScore += 1;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
      console.log('Scissors beats paper! You lose');
      computerScore += 1;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
      console.log('Rock beats scissors! You win');
      humanScore += 1;
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
      console.log('Rock beats scissors! You lose');
      computerScore += 1;
    }

    console.log(`You: ${humanScore} Computer: ${computerScore}`);
  }

  if (roundCounter < 5) {
    playRound(humanSelection, computerSelection);
  } else {
    finalScore();
  }
}

function finalScore() {
  console.log('Final score');
  if (humanScore === computerScore) {
    console.log(`It's a tie! Nobody wins the game`);
  } else if (humanScore > computerScore) {
    console.log('You won the game!');
  } else if (computerScore > humanScore) {
    console.log('You lost the game!');
  }
}

playGame();
