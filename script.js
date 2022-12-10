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

function playRound(playerChoice, computerChoice){
    if (playerChoice == computerChoice){
        console.log("It is a tie! Next round...");
        return 0;
    }
    else if (playerChoice == "rock" && computerChoice == "paper"){
        console.log("The computer won that round!");
        return -1;
    }
    else if (playerChoice == "rock" && computerChoice == "scissors"){
        console.log("You won!");
        return 1;
    }
    else if (playerChoice == "paper" && computerChoice == "scissors"){
        console.log("The computer won that round!");
        return -1;
    }
    else if (playerChoice == "paper" && computerChoice == "rock"){
        console.log("You won!");
        return 1;
    }
    else if (playerChoice == "scissors" && computerChoice == "rock"){
        console.log("The computer won that round!");
        return -1;
    }
    else if (playerChoice == "scissors" && computerChoice == "paper"){
        console.log("You won!");
        return 1;
    }
}

function playGame(){
    numOfRounds = prompt("Welcome to rock, paper, scissors. How many rounds would you like to play? ");
    let computerScore = 0;
    let playerScore = 0;

    for (let x = 1; x <= numOfRounds; x++){
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
        let roundResult = playRound(playerChoice, computerChoice);
        
        if (roundResult > 0){
            playerScore += 1;
        }
        else if (roundResult < 0){
            computerScore += 1;
        }

    }
    console.log(`These were most excellent rounds both you and the computer have played. Well done. Final score is Computer: ${computerScore} and Player ${playerScore}`);
}

playGame();