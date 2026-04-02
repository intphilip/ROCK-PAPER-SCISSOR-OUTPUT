function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    
    // 1. Generate a random move for the computer
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomNumber];

    // 2. Display the moves on the screen
    document.getElementById('user-move').innerText = `Your Move: ${capitalize(userChoice)}`;
    document.getElementById('computer-move').innerText = `Computer Move: ${capitalize(computerChoice)}`;

    // 3. Determine the winner
    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a Tie! 🤝";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You Win! 🎉";
    } else {
        result = "Computer Wins! 🤖";
    }

    // 4. Update the UI with the winner
    document.getElementById('winner-text').innerText = result;
}

// Simple helper function to make the first letter uppercase
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}