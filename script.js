const playerBtn = document.querySelector(".rsp-btn");
const btnContainer = document.querySelectorAll(".btn-cont");
const btnNewGame = document.querySelector(".new-btn");
const scoreElement = document.querySelectorAll(".score");
const playerScoreEl = document.querySelector("#score--0");
const computerScoreEl = document.querySelector("#score--1");
const playerWin = document.querySelector(".player");
const computerWin = document.querySelector(".computer");
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
  if (playerScore === 5 || computerScore === 5) return;
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

let scores, playerScore, computerScore;
function init() {
  scores = [0, 0];
  playerScore = 0;
  computerScore = 0;

  updateScoreDisplay();
}

function updateScoreDisplay() {
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;

  playerWin.classList.remove("player--winner");
  computerWin.classList.remove("computer--winner");
}

function updateScore(winner) {
  if (winner === "player") {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    if (playerScore === 5) {
      playerWin.classList.add("player--winner");
    }
  } else if (winner === "computer") {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    if (computerScore === 5) {
      computerWin.classList.add("computer--winner");
    }
  }
}
playerBtn.addEventListener("click", function (e) {
  if (e.target.matches("button")) {
    const playerSelection = e.target.dataset.choice;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
});

btnNewGame.addEventListener("click", init);

init();
