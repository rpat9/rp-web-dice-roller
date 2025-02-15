let playerScore = 0;
let computerScore = 0;
const winningScore = 20;

document.addEventListener('DOMContentLoaded', initializeGame());

function initializeGame() {
    document.getElementById("roll-button").addEventListener("click", rollDice);
    document.getElementById("reset-button").addEventListener("click", resetGame);
    rollDice();
}

function getRandomDiceValue() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
    let playerRoll = getRandomDiceValue();
    let computerRoll = getRandomDiceValue();

    updateScores(playerRoll, computerRoll);
    updtateDiceDisplay(playerRoll);
    checkWinner();
}


function updateScores(playerRoll, computerRoll) {
    playerScore += playerRoll;
    computerScore += computerRoll;
    document.getElementById("player-score").textContent = `Score: ${playerScore}`;
    document.getElementById("computer-score").textContent = `Score: ${computerScore}`;
}

function updtateDiceDisplay(playerRoll) {
    const diceImage = document.getElementById("dice-image");
    diceImage.src = `images/dice-six-faces-${playerRoll}.png`;
}

function checkWinner() {
    if (playerScore >= winningScore) {
        alert("You win!");
        resetGame();
    } else if (computerScore >= winningScore) {
        alert("Computer wins!");
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("player-score").textContent = "Score: 0";
    document.getElementById("computer-score").textContent = "Score: 0";
}