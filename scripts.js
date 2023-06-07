// use Math.random to get a number 1-3 and asign value of `computerHand` /JCVA-07062023
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let handPosition
    switch (randomNumber) {
        case 1:
            handPosition = "rock"
            break;
        case 2:
            handPosition = "paper"
            break;
        case 3:
            handPosition = "scissors"
            break;
    }
    console.log(handPosition)
    return handPosition;
}
// use recursion by calling function again to verify correct answer from user (afaik this is not ideal and while debugging when the "if" evaluates false and recurses at least once, it makes a pause on line 27 after it evaluates true) and ger `userHand`. //JCVA-07062023
function getUserChoice() {
    let userPrompt = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (userPrompt === "rock" || userPrompt === "paper" || userPrompt === "scissors") {
        return userPrompt;
    }
    alert('wrong answer, try again!')
    // as suggested by @Decim, adding return to the "recursion" solved the problem... might need to study why that happens. /JCVA-06062023
    return getUserChoice();
    //also saved an image from @B96 which has the same code but his works... might learn something from it (image is saved on a folder called "help"). /JCVA-06062023
}
//Takes arguments from the "game" function scope (<<mention this because `userHand` and `computerHand` are generated inside game function, is that ok?) and uses them to evaluate with switch cases who won. /JCVA-07062023
function checkWinner(userHand, computerHand) {
    let whoWin
    switch(true){
        case userHand === 'rock' && computerHand === 'paper':
            alert('you lose')
            whoWin = 'you lose'
            break;
        case userHand === 'paper' && computerHand === 'scissors':
            alert('you lose')
            whoWin = 'you lose'
            break;
        case userHand === 'scissors' && computerHand === 'rock':
            alert('you lose')
            whoWin = 'you lose'
            break;
        case userHand === computerHand:
            alert("it's a tie")
            whoWin = "it's a tie"
            break;
        default:
            alert('you win')
            whoWin = 'you win'
    }
    return whoWin;
}
// this function calls all the others to get values of each one and makes an alert telling who won the game (logs are there for debugging)
function game() {
    for(let i = 1; i <= 5 ; i++) {
        let computerHand = getComputerChoice();
        let userHand = getUserChoice();
        let whoWin = checkWinner(userHand, computerHand);
        alert(`computer got ${computerHand} and you chose ${userHand}. so ${whoWin}. thats ${i}/5 games`)
        console.log(`computer got ${computerHand} and you chose ${userHand}. so ${whoWin} thats ${i}/5 games`)
        console.log(i)

    }

}

game();