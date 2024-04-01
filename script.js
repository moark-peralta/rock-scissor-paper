function getComputerChoice() {
  const rand = Math.floor(Math.random() * 3) + 1;
  console.log(rand);

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

getComputerChoice();
