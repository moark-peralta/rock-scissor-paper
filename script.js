const computerSelection = getComputerChoice();
const playerSelection = getPlayChouce();
// prompt(
//   "Pick between Rock, Scissors or Paper"
// ).toLowerCase();

console.log(playerSelection, computerSelection);

// Formatting
function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function getPlayChouce() {
  const rand = Math.floor(Math.random() * 3) + 1;

  switch (rand) {
    case 1:
      if (rand === 1) return "rock";
      break;
  }
  switch (rand) {
    case 2:
      if (rand === 2) return "paper";
      break;
  }
  switch (rand) {
    case 3:
      if (rand === 3) return "scissors";
      break;
  }
}

function getComputerChoice() {
  const rand = Math.floor(Math.random() * 3) + 1;

  switch (rand) {
    case 1:
      if (rand === 1) return "rock";
      break;
  }
  switch (rand) {
    case 2:
      if (rand === 2) return "paper";
      break;
  }
  switch (rand) {
    case 3:
      if (rand === 3) return "scissors";
      break;
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

playRound(playerSelection, computerSelection);
