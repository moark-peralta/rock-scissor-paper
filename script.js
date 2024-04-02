// Get Computer Choice
function getComputerChoice() {
  const rand = Math.floor(Math.random() * 3) + 1;

  switch (rand) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

// Play Round of RSP
function playRound(playerSelection, computerSelection) {
  // Player Win
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    updateScore("player");
  }
  //Computer Win
  else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    updateScore("computer");
  } else if (playerSelection === computerSelection) {
    console.log(`It's a Draw!`);
  }
}

// console.log(btnContainer);
//Play Game of RSP
// function playGame() {
//   let playerScore = 0;
//   let computerScore = 0;

//   const computerSelection = getComputerChoice();
//   const playerSelection = getPlayerChoice();
//   //   for (let i = 0; i < 5; i++) {
//   //   const playerSelection = prompt(
//   //     "Enter your choice (rock, paper, or scissors):"
//   //   ).toLowerCase();
//   //   const computerSelection = ["rock", "paper", "scissors"][
//   //     Math.floor(Math.random() * 3)
//   //   ];

// playRound();

// if (playerSelection === computerSelection) {
//   console.log("It's a draw for this round!");
// } else if (
//   (playerSelection === "rock" && computerSelection === "scissors") ||
//   (playerSelection === "paper" && computerSelection === "rock") ||
//   (playerSelection === "scissors" && computerSelection === "paper")
// ) {
//   playerScore++;
// } else {
//   computerScore++;
// }
//   }

// if (playerScore > computerScore) {
//   console.log(`Player wins the game! ${playerScore} vs ${computerScore}`);
// } else if (computerScore > playerScore) {
//   console.log(`Computer wins the game! ${computerScore} vs ${playerScore}`);
// } else {
//   console.log(`It's a draw game! ${playerScore} vs ${computerScore}`);
// }
// }
// playGame();

const playerBtn = document.querySelector(".rsp-btn");
const btnContainer = document.querySelectorAll(".btn-cont");
const btnNewGame = document.querySelector(".new-btn");
const scoreElement = document.querySelectorAll(".score");
const playerScoreEl = document.querySelector("#score--0");
const computerScoreEl = document.querySelector("#score--1");

let scores, playerScore, computerScore;
function init() {
  scores = [0, 0];
  playerScore = 0;
  computerScore = 0;

  updateScoreDisplay();
}

init();

function updateScoreDisplay() {
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
}

function updateScore(winner) {
  if (winner === "player") playerScore++;
  else if (winner === "computer") {
    computerScore++;
  }
  updateScoreDisplay();
}
playerBtn.addEventListener("click", function (e) {
  if (e.target.matches("button")) {
    const playerSelection = e.target.dataset.choice;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
});

btnNewGame.addEventListener("clicl", init);
