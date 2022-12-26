/* Function to get player's play */
function getPlayerChoice() {
    const playerChoice = prompt("Pick Rock, Paper, or Scissors");
    return playerChoice.toLowerCase();
}

/* Function to make the computer's play */
function getComputerChoice() {
    /* randomly return Rock, Paper, or Scissors */
    const choices = ['Rock', 'Paper', "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)].toLowerCase();
}

/* Round of rock paper scissors */
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie round... go again...";
        return false
    }
    else if (playerSelection === "rock" & computerSelection === "scissors") {
        return "You Win! Rock beats Scissors!";
    }
    else if (playerSelection === "scissors" & computerSelection === "paper") {
        return "You Win! Scissors beat Paper!";
    }
    else if (playerSelection ==="paper" & computerSelection === "rock") {
        return "You Win! Paper beats Rock!";
    }
    else {
        return "You Lose! " + playerSelection + " is beaten by " + computerSelection + "!";
    }
}

/* Player and computer play same thing -> new round */
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        
        let playerChoice = getPlayerChoice();
        let result = playRound(playerChoice, getComputerChoice());
        console.log(result);
        
        if (result.includes("Win")) {
            playerScore += 1;
        }
        else if (result.includes("Lose")) {
            computerScore += 1;
        }
        else {
            i -= 1;
        }
     }

     if(playerScore > computerScore) {
        return "You Win!"
     }
     else {
        return "You Lose!"
     }
}