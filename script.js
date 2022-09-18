// Game rules 
/* rock > scissor
   scissor > paper
   paper > rock */

// create variable "playerSelection" to store player choice
let playerSelection;
// create variable "computerSelection" to store computer choice
let computerSelection;

// create function "getComputerChoice" to to generate computerSelection
function getComputerChoice() {
    let random = Math.floor(Math.random() * (4-1)) + 1; //generate random between 1 and 3 inclusive
    if (random === 1) {
        return "scissor";
    }
    else if (random === 2) {
        return "rock";
    }
    else {
        return "paper";
    }
}

// create function "playRound" with two case-insensitive parameters: playerSelection, computerSelection
function playRound(playerSelection, computerSelection) {

    let playerChoice = playerSelection.toLowerCase(); // force to lower case
    let computerChoice = computerSelection.toLowerCase();

    if (playerChoice === "rock" && computerChoice === "scissor") {
        return "You won! Rock beats Scissor";
    }
    else if (playerChoice === "scissor" && computerChoice === "rock") {
        return "You lose! Rock beats Scissor";
    }
    else if (playerChoice === "scissor" && computerChoice === "paper") {
        return "You won! Scissor beats Paper";
    }
    else if (playerChoice === "paper" && computerChoice === "scissor") {
        return "You lose! Scissor beats Paper";
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
        return "You won! Paper beats rock";
    }
    else if (playerChoice === "rock" && computerChoice === "paper") {
        return "You lose! Paper beats rock";
    }
    else {
        return `It's a tie! You both chose ${playerChoice}`; // if playerChoice === computerChoice 

    }

}


// function of play game to encapsulate variables inside function scope
function game() {
    let roundResult; //to catch playRound() return value
    let playerWins = 0; // to keep track player and computer scores
    let computerWins = 0;
    let rounds = 0; // to keep track of rounds number
    
    // Select DOM for manipulation
    const buttons = document.querySelectorAll("button");
    const playerScore = document.querySelector(".scores p:first-child");
    const computerScore = document.querySelector(".scores p:last-child");
    const result = document.querySelector("#Result");
    const roundNumber = document.querySelector("#round");
    const body = document.querySelector("body");
    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Restart"; // set button text
    
    buttons.forEach(button => { // iterate through each button
        button.addEventListener("click", function (e) {
            //get computer choice
            computerSelection = getComputerChoice();
            // get player choice
            playerSelection = e.target.textContent;
            // get one round result
            roundResult = playRound(playerSelection, computerSelection);

            // set round display to current round number
            roundNumber.textContent = `Round: ${rounds}`;
            
            // if player win
            if (roundResult.slice(0, 7) === "You won") {
                playerWins++; // increment player score by 1
                rounds++; // update round number
                playerScore.textContent = `Player score: ${playerWins}`; //display current player score
                result.textContent = roundResult; // display the round result
                roundNumber.textContent = `Round: ${rounds}`; // display current round number
            }
            // if computer wins
            else if (roundResult.slice(0, 8) === "You lose") {
                computerWins++; //increment computer score by 1
                rounds++; // update round number
                computerScore.textContent = `Computer score: ${computerWins}`; //display current computer score
                result.textContent = roundResult; // display the round result
                roundNumber.textContent = `Round: ${rounds}`; // display current round number
            }
            // if it's a tie
            else {
                result.textContent = roundResult; // display round result
                roundNumber.textContent = `Round: ${rounds}`; // display current round number
            }

            // if 5 points are reached by one of competitors
            if (playerWins === 5 || computerWins === 5) {
                for (let btn of buttons) { // disable choice buttons
                    btn.disabled = true;
                }
                setTimeout(()=> { // pause execution 3000 ms then execute the code below
                    
                    // display the final result
                    if (playerWins > computerWins) {
                        result.textContent = "Player wins!";
                    }
                    else {
                        result.textContent = "Computer wins!";
                    }

                    // Add restart button to restart game
                    body.appendChild(restartBtn);
                    restartBtn.addEventListener("click", () =>{ // if button clicked
                        // reset game variables to initial values
                        roundNumber.textContent = "";
                        rounds = 0;
                        playerWins = 0;
                        computerWins = 0;
                        playerScore.textContent = "Player score: 0";
                        computerScore.textContent = "Computer score: 0";
                        result.textContent = "";

                        // reenable choose buttons
                        for (let btn of buttons) {
                            btn.disabled = false;
                        }
                        // remove restart button from the screen
                        body.removeChild(restartBtn);
                    });
                }, 3000);
            
            }
    });
    });


}


//run game //
game();
