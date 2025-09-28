function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats Rock";
  } else if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt();
    const result = playRound(playerSelection);
    console.log(result);
    if (result.includes("You win!")) {
      playerScore++;
    } else if (result.includes("You lose!")) {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    return "You win the game!";
  } else if (computerScore > playerScore) {
    return "You lose the game!";
  } else return "It's a tie overall!";
}
