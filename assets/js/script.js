// consts and variables

const choices = document.querySelectorAll(".choices");
let playerScore = 0;
let computerScore = 0;

// eventlistener for selection of choices

choices.forEach((choice) => {
    choice.addEventListener("click", function () {
        const playerInput = this.name;

        const computerChoices = ["rock", "paper", "scissors"];
        const computerInput = computerChoices[Math.floor(Math.random() * 3)];

        updateSelections(playerInput, computerInput);
        compareInputs(playerInput, computerInput);
        updateScore();
        if(checkWinner()){
            playerScore = computerScore= 0;
            updateScore();
        }
      });
    });


// function to update user selections 
function updateSelections(playerInput, computerInput){
    document.getElementById("playerselection").src = `./assets/images/${playerInput}.jpg`;
    document.getElementById("computerselection").src =`./assets/images/${computerInput}.jpg`;
}

// function to pick winner

function compareInputs(playerInput, computerInput){
    const currentMatch = `${playerInput} vs ${computerInput}`;
    if (playerInput === computerInput) {
        document.getElementById("result").textContent = `${currentMatch} is a Tie`;
        document.getElementById("result").style.color = "black";
        return;
    }
// logic for rock selection

    if (playerInput === "rock") {
        if (computerInput === "scissors") {
            document.getElementById("result").textContent = `${currentMatch} You win!`;
            document.getElementById("result").style.color.bold = "green";
            playerScore++;
        }   else {
            document.getElementById("result").textContent = `${currentMatch} Computer wins`;
            document.getElementById("result").style.color = "red";
            computerScore++;
        } 
      }
// logic for paper selection

    else if (playerInput === "paper") {
        if (computerInput === "rock") {
            document.getElementById("result").textContent = `${currentMatch} You win!`;
            document.getElementById("result").style.color = "green";
            playerScore++;
        }   else { 
            document.getElementById("result").textContent = `${currentMatch} Computer wins`;
            document.getElementById("result").style.color = "red";
            computerScore++;
        }
    }

//logic for scissors selection

    else {
        if (computerInput === "paper") {
            document.getElementById("result").textContent = `${currentMatch} You win`;
            document.getElementById("result").style.color = "green";
            playerScore++;
        }   else {
            document.getElementById("result").textContent = `${currentMatch} Computer wins`;
            document.getElementById("result").style.color = "red";
            computerScore++;
            
        }
    }

}

// function for score updates

function updateScore() {
    document.getElementById("playerscore").textContent = playerScore;
    document.getElementById("computerscore").textContent = computerScore;

}

// function to check for winner

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

