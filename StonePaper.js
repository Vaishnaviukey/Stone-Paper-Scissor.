let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const mgs = document.querySelector("#mgs");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
    //rock, paper, scissors
}

const drawGame = () => {
    mgs.innerHTML = "game was draw. Play again";
}

const showWinner = (userWin , userChoice , compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerHTML = userScore;
        mgs.innerHTML = `you win! your ${userChoice} beats ${compChoice}`;
        mgs.Style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerHTML = compScore;
        mgs.innerHTML = `you lose! ${compChoice} beats  your ${userChoice}`;
        mgs.Style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    //Generate computer choie -> modeule
    const compChoice = genCompChoice();
    console.log("computer choice = ",compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin = true ;
        if(userChoice === "rock") {
            //scissor, paper
            userWin = compChoice === "paper" ? false : true ;
        } else if (userChoice === "paper") {
            //rock, scissor
            userWin = compChoice === "scissor" ? false : true ;
        } else {
            //rock , paper
            userWin = compChoice === "rock" ? false : true ;
        }

        showWinner(userWin  , userChoice , compChoice);
    }
}

choices.forEach((choice) => {
    // console.log(choice)
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked");
        playGame(userChoice);
    })
})