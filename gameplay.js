
const choices = ['rock', 'paper', 'scissors']
const buttons = document.querySelectorAll('button')
const div = document.querySelector('div')


// Create function to select random choice for computer
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

let playerScore = 0
let computerScore = 0
// Create function to play rounds and display round text
function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == 'scissors') ||
        (playerSelection == "scissors" && computerSelection == 'paper') ||
        (playerSelection == "paper" && computerSelection == 'rock')) {

        result = (`You win! ${playerSelection} beats ${computerSelection}.`);
        playerScore += 1
    }

    else if (playerSelection === computerSelection) {
        result = (`You tie! You both selected ${playerSelection}.`)
    }

    else {
        result = (`You lose!  ${computerSelection} beats ${playerSelection}.`);
        computerScore += 1
    }

    return result

}

function scoreboard() {
    if (playerScore > computerScore) {
        console.log("Player Won!");
    }
    if (computerScore > playerScore) {
        console.log("Computer Won, darn!");
    }
}

function game() {
    if (playerScore == 5 || computerScore == 5)
        scoreboard()
    return [playerScore, computerScore]
}


// Create listener event on button to playRound when button is pressed
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerSelection = button.id;
        computerSelection = getComputerChoice()
        const container = document.querySelector('.container')
        container.textContent = playRound(playerSelection, computerSelection)

        const score = document.querySelector('.score')
        score.textContent = game()




    })
});


// after someone gets to 5, winner announced
// after 5 points reached, next points clears both to 0 0 and add point
