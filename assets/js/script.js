const choices = document.querySelectorAll(".choices");
let playerScore = 0;
let computerScore = 0;

choices.forEach(choice) => {
    choice.addEventListener("click", function() {
        const playerInput = this.name;

        const computerChoices = ["rock", "paper", "scissors"];
        const computerInput = computerChoices[Math.floor(Math.random() * 3)];

        compareInputs(playerInput, computerInput);
        updateScore();
        if(checkWinner()) {
            playerScore = computerScore = 0;
            updateScore();
        }
      });
    };



function updateSelections(playerInput, computerInput){

}

function compareInputs(playerInput, computerInput){

}

function updateScore() {
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;

}

function checkWinner () {
    if (playerScore === 5 || computerScore ===5) {
        const winner = 
        playerScore === 5
        ? "You win the game! Congrats!"
        : "You lose. Please try again!";
        document.getElementById("result").textContent= winner;
        return true;
    }
    return false;
}

}