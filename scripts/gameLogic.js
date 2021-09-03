let userWins = 0;
let computerWins = 0;

const computerPlay = () => {
    const OPTIONS = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3);
    return OPTIONS[randomNumber];
}

function playRound(userChoice, computerChoice) {

    let userWins;

    switch(userChoice) {
        case "rock":
            if (computerChoice === "rock") {
                console.log("Draw. Great minds think alike.");
            } else if (computerChoice === "paper") {
                console.log("You lose! Paper beats rock.");
            } else {
                console.log("Congrats - you win the round! Rock beats scissors");
                addUserWin(userWins);
            }
            break;
        case "paper":
            if (computerChoice === "paper") {
                console.log("Draw. Great minds think alike.");
            } else if (computerChoice === "scissors") {
                console.log("You lose! Scissors beats paper.");
            } else {
                console.log("Congrats - you win the round! Paper beats rock");
                addUserWin(userWins);
            }
            break;
        case "scissors":
            if (computerChoice === "scissors") {
                console.log("Draw. Great minds think alike.");
            } else if (computerChoice === "paper") {
                console.log("You lose! Paper beats scissors.");
            } else {
                console.log("Congrats - you win the round! Scissors beats paper");
                addUserWin(userWins);
            }
            break
        default:
            alert("You picked an invalid selection");
    }

}

const addUserWin = () => ++userWins;


function game() {

    for (let i = 0; i < 5; i++) {
        const userPlay = prompt("Would you like to pick Rock, Paper or Scissors?").toLowerCase();
        playRound(userPlay, computerPlay());

        if (i === 4) {
            userWins >= 3 ? alert("CONGRATS! YOU WON") : alert("Sadly you lost - better luck next time!")
            console.log("userWins: " + userWins);
        }
    }

}