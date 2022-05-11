const guesses = ['Rock', 'Paper', 'Scissors']
function computerPlay(){
    return guesses[math.floor(math.random()*3)]; 
}

function playRound(computerGuess, playerGuess) {
    if (computerGuess === 'Rock') {
        if (playerGuess === 'Rock') {
            console.log("Both players chose ${playerGuess}. It's a tie.");
        } else if (playerGuess === 'Paper') {
            console.log("Player wins with ${playerGuess}");
        } else {
            console.log("Computer wins with ${ComputerGuess}");
        }
    } else if (computerGuess === 'Paper') {
        if (playerGuess === 'Paper') {
            console.log("Both players chose ${playerGuess}. It's a tie.");
        } else if (playerGuess === 'Scissors') {
            console.log("Player wins with ${playerGuess}");
        } else {
            console.log("Computer wins with ${ComputerGuess}");
        }
    } else {
        if (playerGuess === 'Scissors') {
            console.log("Both players chose ${playerGuess}. It's a tie.");
        } else if (playerGuess === 'Paper') {
            console.log("Player wins with ${playerGuess}");
        } else {
            console.log("Computer wins with ${ComputerGuess}");
        }
    }
}

const computerGuess = computerPlay();
const playerGuess = 1;