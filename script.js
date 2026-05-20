let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // UI Update: Moves
    document.getElementById('user-move').innerText = `Your Move: ${playerChoice.toUpperCase()}`;
    document.getElementById('computer-move').innerText = `Computer Move: ${computerChoice.toUpperCase()}`;

    let result = "";

    // Win/Loss/Draw Logic
    if (playerChoice === computerChoice) {
        result = "IT'S A DRAW! 🤝";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "YOU WIN THIS ROUND! 🏆";
        playerScore++;
    } else {
        result = "YOU LOSE THIS ROUND! 💀";
        computerScore++;
    }

    // UI Update: Round Result & Scores
    document.getElementById('winner-text').innerText = result;
    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('comp-score').innerText = computerScore;

    // Best of 5 Logic (First to 3 Wins)
    // We use a tiny delay so the UI updates before the popup appears
    setTimeout(() => {
        if (playerScore === 5) {
            alert("SERIES OVER: You are the Champion! 🏆✨");
            resetGame();
        } else if (computerScore === 5) {
            alert("SERIES OVER: The Computer wins! 🤖❌");
            resetGame();
        }
    }, 100);
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('player-score').innerText = 0;
    document.getElementById('comp-score').innerText = 0;
    document.getElementById('winner-text').innerText = "Choose your weapon!";
    document.getElementById('user-move').innerText = "Your Move: -";
    document.getElementById('computer-move').innerText = "Computer Move: -";
}