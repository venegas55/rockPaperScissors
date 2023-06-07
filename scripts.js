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
    let userPrompt = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (userPrompt === "rock" || userPrompt === "paper" || userPrompt === "scissors") {
        return userPrompt;
    }
    alert('wrong answer, try again!')
    // as suggested by @Decim, adding return to the "recursion" solved the problem... might need to study why that happens
    return getUserChoice();
    //also saved an image from @B96 which has the same code but his works... might learn something from it (image is saved on a folder called "help")
}

let userHand = getUserChoice();
let computerHand = getComputerChoice();
console.log(`computer hand is ${computerHand} and user hand is ${userHand}`);
