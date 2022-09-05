/* create variable "playerSelection" to store player choice */
/* create variable "computerSelection" to store computer choice */
/* create function "getComputerChoice" to store it in variable "computerSelection" */
        /* make random number between 1 and 3 */
        /* if 1 return scissor */
        /* if 2 return rock */
        /* if 3 return paper */
        /* if random number not between 1 and 3 => run random again until desired number. */
/* ask user to enter choice and store it in "playerChoice" */
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
/* make game plays 5 rounds */
/* print the winner on the console. */


/* game rules */
/* rock > scissor
   scissor > paper
   paper > rock */