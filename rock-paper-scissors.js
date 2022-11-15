// create random choice for computer 
function getComputerChoice (selection){
    let choiceArray = ["Rock", "Paper", "Scissors"]
    return choiceArray[Math.floor(Math.random()*choiceArray.length)]
}
// name computerSelection as random choice function
const computerSelection = getComputerChoice();
const playerSelection = "rock";

function playRound(playerSelection, computerSelection){
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return "You have tied!"
        //if playerSelection is Rock and computerSelection is Scissors, player wins
    } else if (playerSelection == "ROCK" && computerSelection != "SCISSORS"){
        return "You lose! Paper beats Rock."
    } else { 
        return "You lost! Rock beats Scissors."
    }
    }



console.log(playRound(playerSelection, computerSelection))

console.log(getComputerChoice())