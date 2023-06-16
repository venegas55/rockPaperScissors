// use Math.random to get a number 1-3 and asign value of `computerHand` /JCVA-07062023
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let handPosition;
  switch (randomNumber) {
    case 1:
      handPosition = "rock";
      break;
    case 2:
      handPosition = "paper";
      break;
    case 3:
      handPosition = "scissors";
      break;
  }
  console.log(handPosition);
  return handPosition;
}

function getUserChoice(e) {
  let userHand = "";

  const btn = document.querySelector(`img[id=${e.target.id}]`);
  userHand = btn.id;
  //console.log(userHand);
  return userHand;
}

window.addEventListener("click", getUserChoice);
console.log(getUserChoice().toString);

// function getUserChoice() {
//   let userPrompt = "";
//   const buttons = document.querySelectorAll("img");
//   buttons.forEach((img) => {
//     img.addEventListener("click", () => {
//       userPrompt = img.id;
//       return userPrompt;
//       //console.log(userPrompt);
//     });
//   });
//   console.log(userPrompt);
//   return userPrompt;
// }
//Takes arguments from the "game" function scope (<<mention this because `userHand` and `computerHand` are generated inside game function, is that ok?) and uses them to evaluate with switch cases who won. /JCVA-07062023
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
// this function calls all the others to get values of each one and makes an alert telling who won the game (logs are there for debugging)
function game() {
  for (let i = 1; i <= 5; i++) {
    let computerHand = getComputerChoice();
    let userHand = getUserChoice();
    let whoWin = checkWinner(userHand, computerHand);
    alert(
      `computer got ${computerHand} and you chose ${userHand}. so ${whoWin}. thats ${i}/5 games`
    );
    console.log(
      `computer got ${computerHand} and you chose ${userHand}. so ${whoWin} thats ${i}/5 games`
    );
    console.log(i);
  }
}

game();




function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}