const buttons = document.querySelectorAll('button');
const humanScore = document.querySelector(".human-score");
const compScore = document.querySelector(".computer-score");
const result = document.querySelector(".result");

/* Whenever a button is clicked, play a round of rock paper scissors */
buttons.forEach(button => {
  button.addEventListener('click', () => {
    playRound(button.className.toLowerCase(), getComputerChoice());
    checkGameOver()
  });
});

// changing score
function updateScore(score) {
    
    //Get the current value and add 1
    let currentVal = parseInt(score.textContent, 10);
    currentVal++

    //Update the score in the DOM
    score.textContent = currentVal
}


// End Game when someone hits 5
function checkGameOver() {
    if (parseInt(humanScore.textContent) >= 5) {
        result.textContent = "Game Over - You Win!";
    }
    else if (parseInt(compScore.textContent) >= 5) {
        result.textContent = "Game Over - You Lose!";
    }
      // const gameOverDiv = document.createElement('div');
      // gameOverDiv.textContent = 'Game Over';
      // document.body.appendChild(gameOverDiv);
  }

// showing game result
function updateResult(playerChoice, computerChoice, outcome) {
    if (outcome === "win") {
        result.innerHTML = "You won that round. <b>" + playerChoice + "</b> beats <b>" + computerChoice + "</b>.";
    }
    else if (outcome === "lost") {
        result.innerHTML = "You lost that round. <b>" + playerChoice + "</b> loses to <b>" + computerChoice + "</b>.";
    }
    else if (outcome === "tie") {
        result.textContent = "Tie round. Go again.";
    }
    
}


/* Function to make the computer's play */
function getComputerChoice() {
    /* randomly return Rock, Paper, or Scissors */
    const choices = ['Rock', 'Paper', "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)].toLowerCase();
}

/* Round of rock paper scissors */
function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        updateResult(playerSelection, computerSelection, "tie");
    }
    else if ((playerSelection === "rock" & computerSelection === "scissors") 
          || (playerSelection === "scissors" & computerSelection === "paper")
          || (playerSelection ==="paper" & computerSelection === "rock")) {
        updateResult(playerSelection, computerSelection, "win");
        updateScore(humanScore);
          }
    else {
        updateResult(playerSelection, computerSelection, "lost");
        updateScore(compScore);
    }
}

