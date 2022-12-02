
const choices = ['rock', 'paper', 'scissors']
const buttons = document.querySelectorAll('button')
const div = document.querySelector('div')
const winner = document.querySelector('.winner')


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
        return ("Player Won!");
    }
    if (computerScore > playerScore) {
        return ("Computer Won, darn!");

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

        if (playerScore > 4 || computerScore > 4) {

            playerScore = 0
            computerScore = 0
            winner.textContent = ''

        }
        playerSelection = button.id;
        computerSelection = getComputerChoice()
        const container = document.querySelector('.container')
        container.textContent = playRound(playerSelection, computerSelection)

        if (playerScore == 5 || computerScore == 5) {
            winner.textContent = scoreboard()
        }

        const score = document.querySelector('.score')
        score.textContent = game()




    })
});

