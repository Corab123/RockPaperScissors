
const guesses = ['ROCK', 'PAPER', 'SCISSORS']
const gameStart=document.querySelector("div.gameStart");
const gameText=document.querySelector("div.gameText");
const currentScore=document.querySelector("div.currentScore");
let playerScore = 0
let computerScore = 0

function computerPlay(){
    return guesses[Math.floor(Math.random()*3)]; 
}

function playRound(playerGuess) {
    const computerGuess = computerPlay();
    if (computerGuess === 'ROCK') {
        if (playerGuess === 'ROCK') {
            gameText.textContent = (`Both players chose ${playerGuess}. It's a tie, score remains unchanged.`);
            return;
        } else if (playerGuess === 'PAPER') {
            gameText.textContent = `Player wins with ${playerGuess}.`;
            playerScore = playerScore +1;
            currentScore.textContent =`Current Score: Player: ${playerScore} | Computer: ${computerScore}`;
            return;
        } else {
            gameText.textContent = `Computer wins with ${computerGuess}.`
            computerScore = computerScore +1;
            currentScore.textContent =`Current Score: Player: ${playerScore} | Computer: ${computerScore}`;
            return;
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

const buttons = document.querySelectorAll('button.game');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.textContent.toUpperCase());
    });
});

const newGame=document.querySelector('button.newGame');

    
newGame.addEventListener('click', () => {
    const numberOfWins=parseInt(document.getElementById('numberOfGames').value);
    if (numberOfWins<1){
        alert("Can't play less than 1 wins!");
        return;
    };
        if (!numberOfWins) {
        alert("Please input a number.");
        return;
    };

    playerScore = 0
    computerScore = 0

    gameStart.textContent= `Let's begin! Game lasts until ${numberOfWins} wins. Choose wisely!`;
    currentScore.textContent =`Current Score: Player: ${playerScore} | Computer: ${computerScore}`;


    const newGameElements = document.querySelector('div.newGame');
    newGameElements.parentNode.removeChild(newGameElements);
    
});


/* function checkMove(playerGuess){
    if (guesses.includes(playerGuess.toUpperCase())) {
        return playerGuess.toUpperCase();
    } else {
        console.log("Invalid guess")
        return
    }
} */

/* function playGame(length=5){
let playerScore = 0
let computerScore = 0
    while (playerScore < length && computerScore < length){
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
} */
