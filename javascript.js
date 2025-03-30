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


function playGame () {
    let computerChoice = getComputerChoice();

if (humanScore < 3 && computerScore < 3) {
    playRound(humanChoice, computerChoice);

    if (humanScore === 3) {
        console.log("Human Wins!");
    } else if (computerScore === 3) {
        console.log("Computer Wins!");
    }
}
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === choices[0] && computerChoice === choices[2]) {
        humanScore = humanScore + 1;
        console.log("Rock beats scissors: Human beats computer");
    } else if (humanChoice === choices[2] && computerChoice === choices[0]) {
        computerScore = computerScore + 1;
        console.log("Rock beats scissors: Computer beats human")
    } else if (humanChoice === choices[2] && computerChoice === choices[1]) {
        humanScore = humanScore + 1;
        console.log("Scissors beat paper: Human beats computer");
    } else if (humanChoice === choices[1] && computerChoice === choices[2]) {
        computerScore = computerScore + 1;
        console.log("Scissors beat paper: Computer beats human")
    } else if (humanChoice === choices[1] && computerChoice === choices[0]) {
        humanScore = humanScore + 1;
        console.log("Paper beats rock: Human beats computer");
    } else if (humanChoice === choices[0] && computerChoice === choices[1]) {
        computerScore = computerScore + 1;
        console.log("Paper beats rock: Computer beats human");
    } else console.log("Tie!")


    console.log("computer plays: " + computerChoice);
    console.log("human plays: " + humanChoice);

    console.log("Current Score: Human " + humanScore + " - Computer " + computerScore);
    console.log("______________");

    // Reset humanChoice for the next selection
    humanChoice = "";

}
