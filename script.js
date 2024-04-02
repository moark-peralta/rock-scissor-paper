// Formatting
function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
// Get Player Choice
function getPlayerChoice() {
  const input = prompt(`Pick between Rock, Paper or Scissors`).toLowerCase();
  return input;
}
// Get Computer Choice
function getComputerChoice() {
  const rand = Math.floor(Math.random() * 3) + 1;

  switch (rand) {
    case 0:
      //   if (rand === 1)
      return "rock";
  }
  switch (rand) {
    case 2:
      //   if (rand === 2)
      return "paper";
  }
  switch (rand) {
    case 3:
      //   if (rand === 3)
      return "scissors";
  }
}

// Play Round of RSP
function playRound(playerSelection, computerSelection) {
  // Player Win
  const capitalizedPlayerSelection = capitalizeFirstLetter(playerSelection);
  const capitalizedComputerSelection = capitalizeFirstLetter(computerSelection);
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(
      `Player: ${capitalizedPlayerSelection} wins against Computer: ${capitalizedComputerSelection}`
    );
  }
  //Computer Win
  else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    console.log(
      `Computer: ${capitalizedComputerSelection} wins against Player: ${capitalizedPlayerSelection}`
    );
  } else if (playerSelection === computerSelection) {
    console.log(`It's a Draw!`);
  }
}

//Play Game of RSP

const playerBtn = document.querySelectorAll(".player-btn");
const btnContainer = document.querySelector(".choice-container");

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  const computerSelection = getComputerChoice();
  const playerSelection = getPlayerChoice();
  //   for (let i = 0; i < 5; i++) {
  //   const playerSelection = prompt(
  //     "Enter your choice (rock, paper, or scissors):"
  //   ).toLowerCase();
  //   const computerSelection = ["rock", "paper", "scissors"][
  //     Math.floor(Math.random() * 3)
  //   ];

  playRound(playerSelection, computerSelection);

  if (playerSelection === computerSelection) {
    console.log("It's a draw for this round!");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
  } else {
    computerScore++;
  }
  //   }

  if (playerScore > computerScore) {
    console.log(`Player wins the game! ${playerScore} vs ${computerScore}`);
  } else if (computerScore > playerScore) {
    console.log(`Computer wins the game! ${computerScore} vs ${playerScore}`);
  } else {
    console.log(`It's a draw game! ${playerScore} vs ${computerScore}`);
  }
}

btnContainer.addEventListener("click", function (e) {
  if (e.target.matches("button")) {
    const playerSelection = e.target.dataset.choice;
    const computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);
  }
});

playGame();
