// create random choice for computer 
function getComputerChoice (){
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random()*choices.length)]
    
}

const computerSelection = getComputerChoice()

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


let playerSelection = "paper"
console.log(playRound(playerSelection, computerSelection))



