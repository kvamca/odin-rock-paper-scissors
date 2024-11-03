let choices = {
    0:"rock",
    1:"paper",
    2:"scissors"
};

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt("What is your choice?")
    if (humanChoice.toLowerCase() === choices[0]) {
        return choices[0];
    } else if (humanChoice.toLowerCase() === choices[1]){
        return choices[1];
    } else if (humanChoice.toLowerCase() === choices[2]) {
        return choices[2];
    } else alert("Please choose Rock, Paper or Scissors!")
}

//getHumanChoice();

let humanScore = 0;
let computerScore = 0;

function playGame () {
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
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log("computer plays: "+computerSelection);
console.log("human plays: "+humanSelection);
playRound(humanSelection, computerSelection);
console.log("______________");

}

while (humanScore<=3 || computerScore<=3) {
    if (humanScore === 3) {
        console.log("Human Wins!");
        break;
    } else if (computerScore === 3){
        console.log("Computer Wins!");
        break;
    } else playGame ();
}
