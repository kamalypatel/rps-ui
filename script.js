function computerPlay() {
    let randomNum = Math.random();
    let computerSelection = "";
    if (randomNum >= 0.666) {
        let computerSelection = "scissors";
        return computerSelection
    } else if (randomNum >= 0.333) {
        let computerSelection = "paper";
        return computerSelection
    } else {
        let computerSelection = "rock";
        return computerSelection
    }
}

function playRound(playerSelection, computerSelection, playerScore, computerScore) {
    console.log(`The computer selected ${computerSelection}.`);
    console.log(`You selected ${playerSelection}.`)
    if (playerSelection == computerSelection) {
        let matchOutcome = "Match is a draw";
        console.log(matchOutcome);
        var result = "Draw";
        return result;
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            let matchOutcome = "You Lose! Paper beats Rock";
            console.log(matchOutcome);
            var result = "Loss";
            return result;
        } else if (computerSelection == "scissors"){
            let matchOutcome = "You Win! Rock beats scissors";
            console.log(matchOutcome);
            var result = "Win";
            return result;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            let matchOutcome = "You Lose! Scissors beats paper";
            console.log(matchOutcome);
            var result = "Loss";
            return result;
        } else if (computerSelection == "rock") {
            let matchOutcome = "You Win! Paper beats rock";
            console.log(matchOutcome);
            var result = "Win";
            return result;
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            let matchOutcome = "You Lose! Rock beats scissors";
            console.log(matchOutcome);
            var result = "Loss";
            return result;
        } else if (computerSelection == "paper") {
            let matchOutcome = "You Win! Scissors beats paper";
            console.log(matchOutcome);
            var result = "Win";
            return result;
        }
    } else {
            let matchOutcome = "Invalid entry! Please enter Rock, Paper, or Scissors."
            console.log(matchOutcome);
            var result = "Draw";
            return result;
        }  
    return result
}

let playerScore = 0;
let computerScore = 0;

function playerRock() {
    let playerSelection = "rock";
    return playerSelection;
    let computerSelection = computerPlay();
    let matchOutcome = playRound(playerSelection, computerSelection, playerScore, computerScore);
    return matchOutcome;
}

function playerPaper() {
    let playerSelection = "paper";
    return playerSelection;
    let computerSelection = computerPlay();
    let matchOutcome = playRound(playerSelection, computerSelection, playerScore, computerScore);
    return matchOutcome;
}

function playerScissors() {
    let playerSelection = "scissors";
    return playerSelection;
    let computerSelection = computerPlay();
    let matchOutcome = playRound(playerSelection, computerSelection, playerScore, computerScore);
    return matchOutcome;
}

for (i = 1; i = 5; i++){
    let answer = matchOutcome.includes('Win');
    if (answer === true) {
        playerScore = playerScore + 1;
        computerScore = computerScore;
        console.log(`Your score is ${playerScore} and the computer's score is ${computerScore}`);
    } else if (answer === false) {
        computerScore = computerScore + 1;
        playerScore = playerScore;
        console.log(`Your score is ${playerScore} and the computer's score is ${computerScore}`);
    } else {
        console.log(`Your score is ${playerScore} and the computer's score is ${computerScore}`);
    }
}