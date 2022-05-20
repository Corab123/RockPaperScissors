
const guesses = ['ROCK', 'PAPER', 'SCISSORS']

const gameText=document.querySelector("div.gameText");

let playerScore = 0
let computerScore = 0
let numberOfWins;
let gamePlay=false;

const gameElements=document.querySelectorAll('.rps');


changeGameElementHidden();
function changeGameElementHidden(){
    gameElements.forEach((gameElement) => {
        if (!gameElement.classList.contains('hide')){
            gameElement.classList.add('hide');
        } else {
            gameElement.classList.remove('hide');
        }
    });
};

function playRound(playerGuess) {
    const computerGuess = computerPlay();
    if (computerGuess === 'ROCK') {
        if (playerGuess === 'ROCK') {
            gameText.textContent = (`Both players chose ${playerGuess}. It's a tie, score remains unchanged.`);
        } else if (playerGuess === 'PAPER') {
            gameText.textContent = `Player wins with ${playerGuess}.`;
            playerScore = playerScore +1;
            currentScore.textContent =`Current Score: Player: ${playerScore} | Computer: ${computerScore}`;
        } else {
            gameText.textContent = `Computer wins with ${computerGuess}.`
            computerScore = computerScore +1;
            currentScore.textContent =`Current Score: Player: ${playerScore} | Computer: ${computerScore}`;
        }
    } else if (computerGuess === 'PAPER') {
        if (playerGuess === 'PAPER') {
            gameText.textContent = (`Both players chose ${playerGuess}. It's a tie, score remains unchanged.`);
        } else if (playerGuess=== 'SCISSORS') {
            gameText.textContent = `Player wins with ${playerGuess}.`;
            playerScore = playerScore +1;
            currentScore.textContent =`Current Score: Player: ${playerScore} | Computer: ${computerScore}`;
        } else {
            gameText.textContent = `Computer wins with ${computerGuess}.`
            computerScore = computerScore +1;
            currentScore.textContent =`Current Score: Player: ${playerScore} | Computer: ${computerScore}`;
        }
    } else if (computerGuess === 'SCISSORS') {
        if (playerGuess === 'SCISSORS') {
            gameText.textContent = (`Both players chose ${playerGuess}. It's a tie, score remains unchanged.`);
        } else if (playerGuess === 'ROCK') {
            gameText.textContent = `Player wins with ${playerGuess}.`;
            playerScore = playerScore +1;
            currentScore.textContent =`Current Score: Player: ${playerScore} | Computer: ${computerScore}`;
        } else {
            gameText.textContent = `Computer wins with ${computerGuess}.`
            computerScore = computerScore +1;
            currentScore.textContent =`Current Score: Player: ${playerScore} | Computer: ${computerScore}`;
        }
    }
    announceWinner(playerScore, computerScore);
}

function computerPlay(){
    return guesses[Math.floor(Math.random()*3)]; 
}

const buttons = document.querySelectorAll('button.rps');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.textContent.toUpperCase());
    });
});

const newGame=document.querySelector('button.newGame');

newGame.addEventListener('click', () => {
    initiateNewGame()
});

const gameStart=document.querySelector("div.gameStart");
const newGameElements = document.querySelector('div.newGame');

function initiateNewGame(){
    numberOfWins=parseInt(document.getElementById('numberOfGames').value);
    if (numberOfWins<1){
        alert("Are you so afraid? Please enter a number between 1 and 99.");
        return;
    };
        if (!numberOfWins) {
        alert("Please enter a number between 1 and 99.");
        return;
    };
    if (numberOfWins>99){
        alert("It will take a little too long, don't you think? Please enter a number between 1 and 99.");
        return;
    };

    playerScore = 0;
    computerScore = 0;
    gameStart.classList.remove('hide');
    gameStart.textContent= `Game has begun, it lasts until ${numberOfWins} wins. Choose wisely!`;
    gameText.textContent='';
    currentScore.classList.remove('hide');
    currentScore.textContent =`Current Score: Player: ${playerScore} | Computer: ${computerScore}`;

    newGameElements.classList.add('hide');
    changeGameElementHidden();
    gamePlay=true;
}


const currentScore=document.querySelector('div.currentScore');
const baseGame=document.querySelector('div.baseGame');
const playMore=document.querySelector('div.playMore');

function announceWinner(playerScore, computerScore){
    if (playerScore===numberOfWins) {
        gameText.textContent = "You won!";
        currentScore.textContent =`Final Score: Player: ${playerScore} | Computer: ${computerScore}`;
        gameStart.classList.add('hide');
        gamePlay=false;
    }
    if (computerScore===numberOfWins) {
        gameText.textContent = "Game over. You lost.";
        currentScore.textContent =`Final Score: Player: ${playerScore} | Computer: ${computerScore}`;
        gameStart.classList.add('hide');
        gamePlay=false;
    }
    if (!gamePlay){
        changeGameElementHidden();
        playMore.classList.remove('hide');
    };
}
const playMoreButton=document.querySelector('button.playMore');
playMoreButton.addEventListener('click', () => {
    newGameElements.classList.remove('hide');
    playMore.classList.add('hide');
    gameText.textContent='';
    currentScore.classList.add('hide');
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
