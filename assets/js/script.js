const choices = document.querySelectorAll(".choices");
let playerScore = 0;
let computerScore = 0;

choices.forEach(choice) => {
    choice.addEventListener("click", function() {
        const playerInput = this.name;

        const computerChoices (playerInput, computerInput);
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

}

function checkWinner () {

}