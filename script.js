"use strict";

// Computer Choice function

const computerSelection = function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

function getPlayerSelection() {
  const playerSelection = prompt(
    "Choose between: Rock, Paper or Scissors"
  ).toLocaleLowerCase();
  const choices = ["rock", "paper", "scissors"];
  if (!choices.includes(playerSelection)) {
    alert("Invalid Choice! Please choose between Rock, Paper and scissors");
    return getPlayerSelection();
  }
  return playerSelection;
}

console.log(getPlayerSelection());
