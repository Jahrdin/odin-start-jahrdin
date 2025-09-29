const buttons = document.querySelectorAll("button");
let score = document.querySelector(".score");
let playerScore = 0;
let computerScore = 0;

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

function handleClick(playerChoice){
  const result = playRound(playerChoice)
    if (result.includes("You win!")) {
    playerScore++;
  } else if (result.includes("You lose!")) {
    computerScore++;
  }

  score.textContent = `${result} | Player: ${playerScore} – Computer: ${computerScore}`;

    if (playerScore === 5) {
    score.textContent = "You win the game!";
  } else if (computerScore === 5) {
    score.textContent = "You lose the game!";
  }
}

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    const playerChoice = e.target.dataset.choice;
    handleClick(playerChoice);
  });
});
