console.log("im linked");
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.querySelector("img");
    playerSelection = img.id.toLowerCase();
    console.log(`when click` + playerSelection);

    playRound(playerSelection, computerSelection);
  });
});

const weaponArray = ["Rock", "Paper", "Scissors"];

function getComputerSelection() {
  return weaponArray[~~(Math.random() * weaponArray.length)];
}

function checkWinner(userHand, computerHand) {
  let whoWin;
  switch (true) {
    case userHand === "rock" && computerHand === "paper":
      alert("you lose");
      whoWin = "you lose";
      break;
    case userHand === "paper" && computerHand === "scissors":
      alert("you lose");
      whoWin = "you lose";
      break;
    case userHand === "scissors" && computerHand === "rock":
      alert("you lose");
      whoWin = "you lose";
      break;
    case userHand === computerHand:
      alert("it's a tie");
      whoWin = "it's a tie";
      break;
    default:
      alert("you win");
      whoWin = "you win";
  }
  return whoWin;
}

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerSelection().toLowerCase();
  playerSelection = playerSelection.toLowerCase();
  let whoWin = checkWinner(playerSelection, computerSelection);
  console.log(`evaluated PC` + computerSelection);
  console.log(`evaluated Human` + playerSelection);

  alert(
    `computer got ${computerSelection} and you chose ${playerSelection}. so ${whoWin}. thats /5 games`
  );
}
