let userWins = 0;
let computerWins = 0;

const computerPlay = () => {
    const OPTIONS = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3);
    return OPTIONS[randomNumber];
}

const displayRoundWinMessage = (userChoice, computerChoice) => console.log(`You win the round! ${userChoice} beats ${computerChoice}`);
const displayRoundLoseMessage = (userChoice, computerChoice) => console.log(`You lose the round! ${computerChoice} beats ${userChoice}`);


function playRound(userChoice, computerChoice) {


    // All user win conditions in conditional
    if (userChoice === "rock" && computerChoice === "scissors" || userChoice === "paper" && computerChoice === "rock" || userChoice === "scissors" && computerChoice === "paper") {
        displayRoundWinMessage(userChoice, computerChoice);
        userWins++;
    } 
    
    // Draw conditions
    else if (userChoice === computerChoice) {
        console.log("It's a draw round. Great minds think alike!")
    } 

    // All other remaining conditions are computer wins
    else {
        displayRoundLoseMessage(userChoice, computerChoice);
        computerWins++;
    }

}


function game() {

    for (let i = 0; i < 5; i++) {
        const userPlay = prompt("Would you like to pick Rock, Paper or Scissors?").toLowerCase();
        playRound(userPlay, computerPlay());

        if (i === 4) {
            
            if (userWins > computerWins) {
                console.log("Well done - you won the game!")
            } else {
                userWins < computerWins ? console.log("You lost the game! Better luck next time.") : console.log("The game is a draw!")
            }

        }
    }

}

game();