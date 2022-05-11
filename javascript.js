
const guesses = ['ROCK', 'PAPER', 'SCISSORS']

function computerPlay(){
    return guesses[Math.floor(Math.random()*3)]; 
}

function playRound() {
    const computerGuess = computerPlay();
    playerGuess = prompt("Enter your guess: ","Rock");
    playerGuess = checkMove(playerGuess);
    console.log(`Computer guess: ${computerGuess}.`);
    console.log(`Player guess: ${playerGuess}`);
    if (computerGuess === 'ROCK') {
        if (playerGuess === 'ROCK') {
            console.log(`Both players chose ${playerGuess}. It's a tie.`);
            return 0;
        } else if (playerGuess === 'PAPER') {
            console.log(`Player wins with ${playerGuess}`);
            return 1;
        } else {
            console.log(`Computer wins with ${computerGuess}`);
            return -1;
        }
    } else if (computerGuess === 'PAPER') {
        if (playerGuess === 'PAPER') {
            console.log(`Both players chose ${playerGuess}. It's a tie.`);
            return 0;
        } else if (playerGuess=== 'SCISSORS') {
            console.log(`Player wins with ${playerGuess}`);
            return 1;
        } else {
            console.log(`Computer wins with ${computerGuess}`);
            return -1;
        }
    } else if (computerGuess === 'SCISSORS') {
        if (playerGuess === 'SCISSORS') {
            console.log(`Both players chose ${playerGuess}. It's a tie.`);
            return 0;
        } else if (playerGuess === 'ROCK') {
            console.log(`Player wins with ${playerGuess}`);
            return 1;
        } else {
            console.log(`Computer wins with ${computerGuess}`);
            return -1;
        }
    }
}

function checkMove(playerGuess){
    if (guesses.includes(playerGuess.toUpperCase())) {
        return playerGuess.toUpperCase();
    } else {
        console.log("Invalid guess")
        return
    }
}

function game(){
let playerScore = 0
let computerScore = 0
    for (let i = 0; i < 5; i++){
        roundScore = playRound()
        if (roundScore===1) {
            playerScore++
        } else if (roundScore ===-1) {
            computerScore++
        }
        console.log(`Player: ${playerScore} ; Computer: ${computerScore}`)
    }
    if (computerScore === playerScore) {
        console.log("The game is a tie!")
    } else if (playerScore>computerScore) {
        console.log("Player won the game!")
    } else {
        console.log("Computer won the game!")
    }
}