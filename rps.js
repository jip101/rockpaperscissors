let playerScore;
let cpuScore;
let rounds;
let playerTotalScore = document.getElementById("playerScore");
let cpuTotalScore = document.getElementById("cpuScore");

let playerChoice = document.getElementsByClassName("playerChoice");
let gameResults = document.getElementById("gameResults");
let length = playerChoice.length;

let newGameButton = document.getElementById("newGame");
newGameButton.addEventListener("click", newGame);
newGame();


function newGame() {
    newGameButton.style.display = "none";
    playerScore = 0;
    cpuScore = 0;
    rounds = 9;

    for (let i = 0; i < length; i++) {
        playerChoice[i].addEventListener("click", updateScore)
    };

    document.getElementById("roundResults").textContent = "";
    document.getElementById("gameResults").textContent = "";

    playerTotalScore.textContent = `${playerScore}/${rounds}`;
    cpuTotalScore.textContent = `${cpuScore}/${rounds}`;
}


function updateScore () {
    result = playRound(this.value, getComputerChoice());
    if (result === "win") {
        playerScore++;
        playerTotalScore.textContent = `${playerScore}/${rounds}`;
        if (playerScore >= rounds/2) {
            gameResults.textContent = `You win! Player = ${playerScore} wins of ${playerScore + cpuScore} rounds`;
            newGameButton.style.display = "";
            for (let j = 0; j < length; j++) {
                playerChoice[j].removeEventListener("click", updateScore);
            }
        }
    }
    else if (result === "lose") {
        cpuScore++;
        cpuTotalScore.textContent = `${cpuScore}/${rounds}`;
        if (cpuScore >= rounds/2) {
            gameResults.textContent = `You lose! CPU = ${cpuScore} wins of ${playerScore + cpuScore} rounds`;
            newGameButton.style.display = "";
            for (let j = 0; j < length; j++) {
                playerChoice[j].removeEventListener("click", updateScore);
            }
        }
    }
}


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    //0 = rock
    if (choice === 0) {
        return "rock"
    }
    //1 = paper
    else if (choice === 1) {
        return "paper"
    }
    //2 = scissors
    else if (choice === 2) {
        return "scissors"
    }
}


function playRound(player, cpu) {
    let roundResults = document.getElementById("roundResults")
    if (player == "rock" && cpu == "scissors" ||
        player == "paper" && cpu == "rock" ||
        player == "scissors" && cpu == "paper") {
        roundResults.textContent = `You win this round, ${player} beats ${cpu}`
        return "win";
    }
    else if (cpu == "rock" && player == "scissors" ||
        cpu == "paper" && player == "rock" ||
        cpu == "scissors" && player == "paper") {
        roundResults.textContent = `You lose this round, ${cpu} beats ${player}`
        return "lose";
    }
    else {
        roundResults.textContent = `Tie, both selected ${cpu}`
    }
}