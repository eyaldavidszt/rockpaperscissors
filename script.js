// ok so i need to have a list of three choices, rock/paper/scissors. the computer needs to choose one of these 
//and send his choice to the function that compares his choice with mine.

//the function that takes the player choice and the computer choice, must return a string declaring the round winner and explaining why.

//that string will be printed using console.log()

//return the process for 5 rounds, whoever has more wins is the overall winner.

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    //choose one of the array strings randomly, and have that be the return value of the function
    let index = Math.floor(Math.random() * 3);
    return options[index];
}

//i need to take in the player choice and input it into the function that compares it with the computer's
//how do i store the player choice in a variable

//this function prompts a user for an input and returns an appropriate string for a result plus a result "code".
function calcRound(computer, player) {
  if (player == "rock") {
    if (computer == "scissors") {
        // player wins
        return ["Player wins! Rock beats Scissors", "1"];
    }
    else if (computer == "paper") {
        // computer wins
        return ["Computer wins! Paper beats Rock", "0"];

    }
    else {
        // draw
        return ["Draw!", "2"];
    }
  }
  if (player == "paper") {
    if (computer == "rock") {
        // player wins
        return ["Player wins! Paper beats Rock", "1"];
    }
    else if (computer == "scissors") {
        // computer wins
        return ["Computer wins! Scissors Beat Paper", "0"];
    }
    else {
        // draw
        return ["Draw!", "2"];
    }
  }
  if (player == "scissors") {
    if (computer == "paper") {
        // player wins
        return ["Player wins! Scissors beat Paper", "1"];
    }
    else if (computer == "rock") {
        // computer wins
        return ["Computer wins! Rock beats Scissors", "0"];
    }
    else {
        // draw
        return ["Draw!", "2"];
    }
  }
}
// select button and add event listener. that event will go off on click and will record the choice. 
// send the class 
let buttons = document.querySelectorAll("button.choice");

let container = document.querySelector(".container");
let humanDiv = document.querySelector(".human-div");
let compDiv = document.querySelector(".comp-div");
let drawDiv = document.querySelector(".draw-div");
let currentRound = document.querySelector(".current-round-div");
let resultDiv = document.querySelector(".result-div");



let countCpu = 0;
let countHuman = 0;
let draw = 0;

function getResult () {
    let playerChoice = this.getAttribute('id'); 
    let list = calcRound(getComputerChoice(), playerChoice);
    if (list[1] == 0) {
        countCpu++;
    }
    else if (list[1] == 1)
    {
        countHuman++;
    }
    else {
        draw++;
    }
    
    currentRound.textContent = `${list[0]}`;
    humanDiv.textContent = `Player: ${countHuman}`;
    compDiv.textContent = `Computer: ${countCpu}`;
    drawDiv.textContent= `Drawn: ${draw}`;
    // if any score = 5, disable the buttons. have a "play again" button which enables them onclick and resets the scores.
    if (countCpu == 5 || countHuman == 5)
    {
        buttons.forEach(button => {
            button.setAttribute("disabled", "true");
        });
        countCpu == 5 ? 
        resultDiv.append("Game over, computer won") :
        resultDiv.append("Game over, player won");
    }
}

buttons.forEach(button => {
    button.addEventListener("click", getResult);
});

//
let playAgain = document.querySelector(".reset");
playAgain.addEventListener("click", resetGame);

function resetGame () {
    buttons.forEach(button => {
        button.removeAttribute("disabled");
    });
    countCpu = 0;
    countHuman = 0;
    draw = 0;
    humanDiv.textContent = `Player: ${countHuman}`;
    compDiv.textContent = `Computer: ${countCpu}`;
    drawDiv.textContent = `Drawn: ${draw}`;
    resultDiv.textContent = "";
    currentRound.textContent ="";
}


