
const choices = ["rock", "paper", "scissors"]
const resultField = document.getElementById("result")
const buttons = document.querySelectorAll("button")
const div = document.createElement("div")
const playerScore = document.getElementById("playerScore")
const computerScore = document.getElementById("computerScore")



function getComputerChoice (){
    return choices[Math.floor(Math.random()*choices.length)]
    
}

function playRound(playerSelection, computerSelection){
  if  ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")){
        
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

function game(){
    let playerScore = 0 
    let computerScore = 0
    for (let i=0; i < 5; i++){
        let computerSelection = getComputerChoice()
        let playerSelection = "rock"
        let result = playRound(playerSelection, computerSelection)
        console.log(result)
        if (result == (`You win! ${playerSelection} beats ${computerSelection}.`)){
            playerScore += 1
        } else if (result == (`You lose!  ${computerSelection} beats ${playerSelection}.`)){
            computerScore += 1
        }
    } 

    if (playerScore > computerScore){
        return "You win! Go have a cookie."
    }else {
        return (`You lose. Better luck next time, pal.`)
    }
}

let playerSelection = "paper"


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
         playerSelection = button.id;
         computerSelection = getComputerChoice()
       console.log(playRound(playerSelection, computerSelection))
  })});


 // call playround func with corect player selection when button is clicked 
