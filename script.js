function getComputerChoice(){
    let computerNumber = Math.floor(Math.random() * 3);
    
    if (computerNumber == 0){
        return "rock";
    }
    else if (computerNumber == 1){
        return "scissors";
    }
    else if (computerNumber == 2){
        return "paper";
    }

}

function getPlayerChoice(){
    let playerChoice = prompt("What is your choice? (Rock, Paper, Scissors) ");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

