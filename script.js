let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    // Randomly pick 0, 1, or 2 from the array
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    // Update the Move text on screen
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
        result = "YOU WIN! 🏆";
        playerScore++;
    } else {
        result = "YOU LOSE! 💀";
        computerScore++;
    }

    // Update the UI with final results and scores
    document.getElementById('winner-text').innerText = result;
    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('comp-score').innerText = computerScore;
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