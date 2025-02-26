let playerScore = 0;
let computerScore = 0;
const winningScore = 20;
const apiURL = 'https://rp-web-diceroller-nodejs-cfhfa0c3gxe7geh3.centralus-01.azurewebsites.net/api/roll';

document.addEventListener('DOMContentLoaded', initializeGame());

async function initializeGame() {
    document.getElementById("roll-button").addEventListener("click", rollDice);
    document.getElementById("reset-button").addEventListener("click", resetGame);
    rollDice();
}


async function rollDice() {
    
    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        const playerRoll = data.playerRoll;
        const computerRoll = data.computerRoll;

        updateScores(playerRoll, computerRoll);
        updtateDiceDisplay(playerRoll);
        checkWinner();

    } catch (error) {
        console.error('Error fetching data:', error);
    }

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