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
computerSelection = getComputerChoice();
console.log(computerSelection);
/* ask user to enter choice and store it in "playerChoice" */
playerSelection = prompt("Choose Rock Paper or Scissor");
console.log(playerSelection);
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
    if (playerSelection === null) {
        return;
    }
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
        return;
    }
}

console.log(playRound(playerSelection, computerSelection));
/* make game plays 5 rounds */
let roundResult;
let playerWins = 0;
let computerWins = 0;

for (let i = 0; i < 5; i++) {
    if (playRound() === undefined) {
        playerSelection = prompt("Choose Rock Paper or Scissor");
    }
    roundResult = playRound(playerSelection, computerSelection);
    if (roundResult.slice(0, 6) === "You won") {
        console.log(roundResult);
        playerWins++;
    }
    else if (roundResult.slice(0, 7) === "You lose") {
        console.log(roundResult);
        computerWins++;
    }
    console.log(`player: ${playerWins} wins | computer: ${computerWins} wins`);
}
/* print the winner on the console. */
if (playerWins > computerWins) {
    console.log("Player wins!");
}
else {
    console.log("computer wins!");
}

/* game rules */
/* rock > scissor
   scissor > paper
   paper > rock */