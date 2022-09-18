/* game rules */
/* rock > scissor
   scissor > paper
   paper > rock */

/* create variable "playerSelection" to store player choice */
let playerSelection;
/* create variable "computerSelection" to store computer choice */
let computerSelection;
/* create function "getComputerChoice" to store it in variable "computerSelection" */
        /* make random number between 1 and 3 */
        /* if 1 return scissor */
        /* if 2 return rock */
        /* if 3 return paper */
function getComputerChoice() {
    let random = Math.floor(Math.random() * (4-1)) + 1;
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

/* create function "playRound" with two case-insensitive parameters: playerSelection, computerSelection and
   and returns the winner. */
        /* force parameters to lower case */
        /* if playerSelection == rock and computerSelection == scissor
                return you won.
            if playerSelection == scissor and computerSelection == rock
                return you loose.
            if playerSelection == scissor and computerSelection == paper
                return you won.
            if playerSelection == paper and computerSelection == scissor
                return you loose.
            if playerSelection == paper and computerSelection == rock
                return you won.
            if playerSelection == rock and computerSelection == paper
                return you loose.
            if tie
                return tie.
            if other inputs
                return; */
function playRound(playerSelection, computerSelection) {

    let playerChoice = playerSelection.toLowerCase();
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
        return `It's a tie! You both chose ${playerChoice}`;

    }

}


/* make game plays 5 rounds */

function game() {
    let roundResult;
    let playerWins = 0;
    let computerWins = 0;
    let rounds = 0;
    
    const buttons = document.querySelectorAll("button");
    const playerScore = document.querySelector(".scores p:first-child");
    const computerScore = document.querySelector(".scores p:last-child");
    const result = document.querySelector("#Result");
    const roundNumber = document.querySelector("#round");
    const body = document.querySelector("body");
    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Restart";
    
    buttons.forEach(button => {
        button.addEventListener("click", function (e) {
            computerSelection = getComputerChoice();
            console.log(computerSelection);
            playerSelection = e.target.textContent;
            console.log(playerSelection);
            roundResult = playRound(playerSelection, computerSelection);
            console.log(roundResult);

            roundNumber.textContent = `Round: ${rounds}`;
            
            if (roundResult.slice(0, 7) === "You won") {
                playerWins++;
                rounds++;
                playerScore.textContent = `Player score: ${playerWins}`;
                result.textContent = roundResult;
                roundNumber.textContent = `Round: ${rounds}`;
            }
            else if (roundResult.slice(0, 8) === "You lose") {
                computerWins++;
                rounds++;
                computerScore.textContent = `Computer score: ${computerWins}`;
                result.textContent = roundResult;
                roundNumber.textContent = `Round: ${rounds}`;
            }
            else {
                result.textContent = roundResult;
                roundNumber.textContent = `Round: ${rounds}`;
            }

            if (playerWins + computerWins === 5) {
                for (let btn of buttons) {
                    btn.disabled = true;
                }
                setTimeout(()=>{
                    if (playerWins > computerWins) {
                        result.textContent = "Player wins!";
                    }
                    else {
                        result.textContent = "Computer wins!";
                    }
                    body.appendChild(restartBtn);
                    restartBtn.addEventListener("click", () =>{
                        roundNumber.textContent = "";
                        rounds = 0;
                        playerWins = 0;
                        computerWins = 0;
                        playerScore.textContent = "Player score: 0";
                        computerScore.textContent = "Computer score: 0";
                        result.textContent = "";
                        for (let btn of buttons) {
                            btn.disabled = false;
                        }
                        console.log(this);
                        body.removeChild(restartBtn);
                    });
                }, 3000);
            
            }
    });
    });


}


/*run game */
game();
