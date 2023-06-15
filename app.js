console.log("im linked");
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let gameCounter = 0;

let buttons = document.querySelectorAll(".button");
const resetButton = document.querySelector("#reset");
let resultDisplay = document.querySelector("#result");

buttons.forEach((button) => {
  button.addEventListener("click", function func() {
    const img = button.querySelector("img");
    playerSelection = img.id.toLowerCase();
    playRound(playerSelection, computerSelection);
  });
});

const weaponArray = ["Rock", "Paper", "Scissors"];

function getComputerSelection() {
  return weaponArray[~~(Math.random() * weaponArray.length)];
}

function roundWinner(userHand, computerHand) {
  let whoWin;
  switch (true) {
    case userHand === "rock" && computerHand === "paper":
      //alert("you lose");
      whoWin = "you lose";
      break;
    case userHand === "paper" && computerHand === "scissors":
      //alert("you lose");
      whoWin = "you lose";
      break;
    case userHand === "scissors" && computerHand === "rock":
      //alert("you lose");
      whoWin = "you lose";
      break;
    case userHand === computerHand:
      //alert("it's a tie");
      whoWin = "it's a tie";
      break;
    default:
      //alert("you win");
      whoWin = "you win";
  }
  return whoWin;
}
let gamesDisplay = document.querySelector("#labelGames");
let wonDisplay = document.querySelector("#labelWon");
let lostDisplay = document.querySelector("#labelLost");

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerSelection().toLowerCase();
  playerSelection = playerSelection.toLowerCase();
  let whoWin = roundWinner(playerSelection, computerSelection);
  console.log(`evaluated PC` + computerSelection);
  console.log(`evaluated Human` + playerSelection);

  switch (true) {
    case whoWin === "you win":
      playerScore = ++playerScore;
      wonDisplay.textContent = playerScore;
      break;
    case whoWin === "you lose":
      computerScore = ++computerScore;
      lostDisplay.textContent = computerScore;
      break;
  }
  ++gameCounter;
  gamesDisplay.textContent = gameCounter;

  if (gameCounter < 5) {
    resultDisplay.textContent = `Computer got ${computerSelection} and you chose ${playerSelection}, So ${whoWin}. That's ${gameCounter}/5 games`;
  } else {
    gameOver(playerScore, computerScore);
  }
}

function gameOver(playerScore, computerScore) {
  if (playerScore > computerScore) {
    resultDisplay.textContent = "CONGRATULATIONS! YOU WIN!!";
  } else if (computerScore > playerScore) {
    resultDisplay.textContent = "LOOSER!!! 💩";
  } else if (computerScore === playerScore) {
    resultDisplay.textContent = "TIE!!! try again?";
  }
}

resetButton.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  gameCounter = 0;
  wonDisplay.textContent = playerScore;
  lostDisplay.textContent = computerScore;
  gamesDisplay.textContent = gameCounter;
  resultDisplay.textContent = "";
});
