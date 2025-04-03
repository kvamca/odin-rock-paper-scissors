let choices = {
    0:"rock",
    1:"paper",
    2:"scissors"
};

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

let humanChoice;
function getHumanChoice() {
    let btnRock = document.querySelector("#rock");
    let btnPaper = document.querySelector("#paper");
    let btnScissors = document.querySelector("#scissors");

    btnRock.addEventListener("click", (event) => {
       humanChoice = "rock";
       playGame();
    });

    btnPaper.addEventListener("click", (event) => {
        humanChoice = "paper";
        playGame();
     });

     btnScissors.addEventListener("click", (event) => {
        humanChoice = "scissors";
        playGame();
     });
}

getHumanChoice();


let humanScore = 0;
let computerScore = 0;

let currentScore = document.querySelector("#currentScore");
let currentMoveHuman = document.querySelector("#currentMoveHuman");
let currentMoveBot = document.querySelector("#currentMoveBot");
let currentResult = document.querySelector("#currentResult");
let winner = document.querySelector("#winner");

let buttonReset = document.querySelector("#buttonReset")

function playGame () {
    let computerChoice = getComputerChoice();

if (humanScore < 3 && computerScore < 3) {
    playRound(humanChoice, computerChoice);

    if (humanScore === 3) {
        winner.textContent = ("Human Wins!");
        buttonReset.innerHTML = ("<button>Reset Game</button>")

    } else if (computerScore === 3) {
        winner.textContent = ("Computer Wins!");
        buttonReset.innerHTML = ("<button>Reset Game</button>")
    }
}
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === choices[0] && computerChoice === choices[2]) {
        humanScore = humanScore + 1;
        currentResult.textContent = ("Rock beats scissors: Human beats computer");
    } else if (humanChoice === choices[2] && computerChoice === choices[0]) {
        computerScore = computerScore + 1;
        currentResult.textContent = ("Rock beats scissors: Computer beats human")
    } else if (humanChoice === choices[2] && computerChoice === choices[1]) {
        humanScore = humanScore + 1;
        currentResult.textContent = ("Scissors beat paper: Human beats computer");
    } else if (humanChoice === choices[1] && computerChoice === choices[2]) {
        computerScore = computerScore + 1;
        currentResult.textContent = ("Scissors beat paper: Computer beats human")
    } else if (humanChoice === choices[1] && computerChoice === choices[0]) {
        humanScore = humanScore + 1;
        currentResult.textContent = ("Paper beats rock: Human beats computer");
    } else if (humanChoice === choices[0] && computerChoice === choices[1]) {
        computerScore = computerScore + 1;
        currentResult.textContent = ("Paper beats rock: Computer beats human");
    } else currentResult.textContent = ("Tie!")

    currentMoveBot.textContent = ("Computer plays: " + computerChoice);
    currentMoveHuman.textContent = ("Human plays: " + humanChoice);

    currentScore.textContent = ("Current Score: " + "Human " + humanScore + " - Computer " + computerScore);

    // Reset humanChoice for the next selection
    humanChoice = "";

}

buttonReset.addEventListener("click", (event) => {
    resetGame();
})

function resetGame() {
    humanScore = 0;
    computerScore = 0;

    currentScore.textContent = "";
    currentMoveHuman.textContent = "";
    currentMoveBot.textContent = "";
    currentResult.textContent = "";
    winner.textContent = "";
    buttonReset.innerHTML = "";

    humanChoice = "";
    computerChoice = "";
    randomNumber = "";

}
