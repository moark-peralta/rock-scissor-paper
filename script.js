function getUserChoice() {
  let userChoice = prompt("Choose: rock, paper, or scissors").toLowerCase();

  if (
    userChoice === "rock" ||
    userChoice === "paper" ||
    userChoice === "scissors"
  ) {
    return userChoice;
  } else {
    console.log("Invalid choice. Please choose rock, paper, or scissors.");
    return getUserChoice();
  }
}

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  const choices = ["rock", "paper", "scissors"];
  return choices[randomNum];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

function playGame(rounds) {
  let userScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= rounds; i++) {
    console.log(`Round ${i}:`);

    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();

    console.log(`You chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    const roundResult = determineWinner(userChoice, computerChoice);
    console.log(roundResult);

    if (roundResult.includes("win")) {
      userScore++;
    } else if (roundResult.includes("lose")) {
      computerScore++;
    }

    console.log(`Score: User ${userScore} - ${computerScore} Computer`);
    console.log("----------------------");
  }

  console.log("Game Over!");
  console.log(`Final Score: User ${userScore} - ${computerScore} Computer`);
}

playGame(5);
