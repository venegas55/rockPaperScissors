function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let handPosition
    switch (randomNumber) {
        case 1:
            handPosition = "Rock"
        break;
        case 2:
            handPosition = "Paper"
        break;
        case 3:
            handPosition = "Scissors"
        break;
    }
    return handPosition;
}

function getUserChoice (){
    let userPrompt = prompt("Rock, Paper or Scissors?")
    let userChoice = userPrompt.toLowerCase();
    return userChoice;
}

getUserChoice();
getComputerChoice();
let userHand = getUserChoice();
let computerHand = getComputerChoice();
console.log(`computer hand is ${computerHand} and user hand is ${userHand}`);

