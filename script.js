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
function calcRound(computer) {
    let result = [];
    let response = prompt("Choose rock, paper, or scissors: ");
    const player = response.toLowerCase();


    
  if (player == "rock") {
    if (computer == "scissors") {
        // player wins
        result.push("Player wins! Rock beats Scissors");
        result.push("1");
        return result;
    }
    else if (computer == "paper") {
        // computer wins
        result.push("Computer wins! Paper beats Rock");
        result.push("0");
        return result;
    }
    else {
        // draw
        result.push("Draw");
        result.push("2");
        return result;
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
        return ["Draw", "2"];
    }
  }
}
//this function calls the round functions, and stores the return value in a variable. it checks who won the round and increments the appropriate player's win count
//we do this 5 times and then we compare the two win counts.
function game() {
    let count_cpu = 0;
    let count_human = 0;
    for (let i = 0; i < 5; i++) {
        list = calcRound(getComputerChoice());
        if (list[1] == 0) {
            count_cpu++;
        }
        else if (list[1] == 1) {
            count_human++;
        }
        console.log(list[0]);

    }
    if (count_cpu > count_human) {
        console.log("Computer wins");
    }
    else if (count_human > count_cpu) {
        console.log("Human wins");
    }
    else {
        console.log("It's a draw");
    }
}

//actually calling the game function which will call the round function 5 times and look at it's results to increment player's win counts each time
game();