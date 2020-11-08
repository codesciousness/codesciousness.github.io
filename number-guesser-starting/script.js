let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function getAbsoluteDistance(num1, num2) {
    return Math.abs(num1 - num2);
}
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}
function compareGuesses(humanGuess, computerGuess, targetNumber) {
    let humanProximity = getAbsoluteDistance(targetNumber, humanGuess);
    let computerProximity = getAbsoluteDistance(targetNumber, computerGuess);
    return humanProximity <= computerProximity;
}
const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    }
    else if (winner === 'computer') {
        computerScore ++;
    }
}
function advanceRound() {
    currentRoundNumber ++;
}
