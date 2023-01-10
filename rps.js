game();


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


function getPlayerChoice() {
    let answer;
    do {
        answer = prompt("Select rock, paper, or scissors: ");
        answer = answer.toLowerCase();
    } while (answer !== "rock" && answer !== "paper" && answer !== "scissors");
    return answer;
    }


function playRound(player, cpu) {
    if (player == "rock" && cpu == "scissors" ||
        player == "paper" && cpu == "rock" ||
        player == "scissors" && cpu == "paper") {
        console.log(`You win, ${player} beats ${cpu}`)
        return "win";
    }
    else if (cpu == "rock" && player == "scissors" ||
        cpu == "paper" && player == "rock" ||
        cpu == "scissors" && player == "paper") {
        console.log(`You lose, ${cpu} beats ${player}`)
        return "lose";
    }
    else {
        console.log(`Tie, both selected ${cpu}`)
    }
}


function game() {
    let playerScore = 0;
    let cpuScore = 0;
    let rounds = 5;
    for (let i = 0; i < rounds;){
        let results = playRound(getPlayerChoice(), getComputerChoice());
        if (results === "win") {
             playerScore++;
             if (playerScore > (rounds / 2))
             {
                i++;
                 return console.log(`You win! Player = (${playerScore}/${rounds})`)
             }
        }
        else if (results === "lose") {
            cpuScore++;
            if (cpuScore > (rounds / 2))
            {
                i++;
               return console.log(`You lose! CPU = (${cpuScore}/${rounds})`)
            }
        }  
        console.log(`Player score = ${playerScore} | CPU score = ${cpuScore}`)
    }
}