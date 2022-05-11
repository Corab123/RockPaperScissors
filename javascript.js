
const guesses = ['ROCK', 'PAPER', 'SCISSORS']

function computerPlay(){
    return guesses[Math.floor(Math.random()*3)]; 
}

function playRound(playerGuess) {
    const computerGuess = computerPlay();
    playerGuess = checkMove(playerGuess);
    console.log(`Computer guess: ${computerGuess}.`);
    console.log(`Player guess: ${playerGuess}`);
    if (computerGuess === 'ROCK') {
        if (playerGuess === 'ROCK') {
            console.log(`Both players chose ${playerGuess}. It's a tie.`);
        } else if (playerGuess === 'PAPER') {
            console.log(`Player wins with ${playerGuess}`);
        } else {
            console.log(`Computer wins with ${computerGuess}`);
        }
    } else if (computerGuess === 'PAPER') {
        if (playerGuess === 'PAPER') {
            console.log(`Both players chose ${playerGuess}. It's a tie.`);
        } else if (playerGuess=== 'SCISSORS') {
            console.log(`Player wins with ${playerGuess}`);
        } else {
            console.log(`Computer wins with ${computerGuess}`);
        }
    } else if (computerGuess === 'SCISSORS') {
        if (playerGuess === 'SCISSORS') {
            console.log(`Both players chose ${playerGuess}. It's a tie.`);
        } else if (playerGuess === 'ROCK') {
            console.log(`Player wins with ${playerGuess}`);
        } else {
            console.log(`Computer wins with ${computerGuess}`);
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

function game();
    for (let i = 0; i < 5; i++){
        playRound()
    }