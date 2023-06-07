function getComputerChoice() {
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

function getUserChoice() {
    let userPrompt = prompt("Rock, Paper or Scissors?")
    let userChoice = userPrompt.toLowerCase();
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        return userChoice;
    }else {
        alert("respuesta incorrecta")
        retry();
    }
    
}

function retry() {
    getUserChoice()
}



let userHand = getUserChoice();
let computerHand = getComputerChoice();
console.log(`computer hand is ${computerHand} and user hand is ${userHand}`);
