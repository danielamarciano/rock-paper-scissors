
const choices = ['rock', 'paper', 'scissors']
const buttons = document.querySelectorAll('button')
const displayContainer = document.createElement('div')



// Create function to select random choice for computer
function getComputerChoice (){
    return choices[Math.floor(Math.random()*choices.length)]
    
}

// Create function to play rounds and display round text
function playRound(playerSelection, computerSelection){
  if  ((playerSelection == "rock" && computerSelection == 'scissors') ||
        (playerSelection == "scissors" && computerSelection == 'paper') ||
        (playerSelection == "paper" && computerSelection == 'rock')){
        
        result = (`You win! ${playerSelection} beats ${computerSelection}.`)
        } 

    else if (playerSelection === computerSelection){
        result = (`You tie! You both selected ${playerSelection}.`)
        } 
   
    else {
        result = (`You lose!  ${computerSelection} beats ${playerSelection}.`)
        } 
    
return result

}

// Create function to count score and determine winner
function game(){
    let playerScore = 0 
    let computerScore = 0
    for (let i=0; i < 5; i++){
        let computerSelection = getComputerChoice()
        let playerSelection = 'rock'
        let result = playRound(playerSelection, computerSelection)
        console.log(result)
        if (result == (`You win! ${playerSelection} beats ${computerSelection}.`)){
            playerScore += 1
        } else if (result == (`You lose!  ${computerSelection} beats ${playerSelection}.`)){
            computerScore += 1
        }
    } 
    if (playerScore > computerScore){
        return 'You win! Go have a cookie.'
    }else {
        return (`You lose. Better luck next time, pal.`)
    }
}

let playerSelection = 'paper'


// Create listener event on button to playRound when button is pressed
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
         playerSelection = button.id;
         computerSelection = getComputerChoice()
       console.log(playRound(playerSelection, computerSelection))
  })});


