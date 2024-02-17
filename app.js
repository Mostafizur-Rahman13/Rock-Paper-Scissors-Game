
const Choices = document.querySelectorAll(".choice");
const userScorep = document.querySelector("#user-Score");
const compScorep = document.querySelector("#comp-Score");
const msg = document.querySelector("#msg");

let userScore = 0;
let compScore = 0;

Choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let usrchoice = choice.getAttribute("id");

        PlayGame(usrchoice);

    });
});

const PlayGame = (usrchoice) => {

    let compchoice = GenComp();

    if (usrchoice === compchoice) {
        GameDraw()
    } else {

        let usrwin = true;

        if (usrchoice === "Rock") {
            // Scissors
            usrwin = compchoice === "Paper" ? false : true;

        } else if (usrchoice === "Paper") {
            //Rock
            usrwin = compchoice === "Scissors" ? false : true;

        } else {
            //Paper
            usrwin = compchoice === "Rock" ? false : true;
        }

        GameWinner(usrwin, usrchoice, compchoice);
    }

}

const GameWinner = (usrwin, usrchoice, compchoice) => {

    if (usrwin) {
        userScore++;
        userScorep.innerText = userScore;
        msg.innerText = `You Win ! Your ${usrchoice} Beats ${compchoice} `;
        msg.style.backgroundColor = "green";

    } else {
        compScore++;
        compScorep.innerText = compScore;
        msg.innerText = `You loss ! ${compchoice} Beats Your ${usrchoice} `;
        msg.style.backgroundColor = "red";


    }
}


const GameDraw = () => {

    msg.innerText = "Game Draw ! Play Again";
    msg.style.backgroundColor = "#081b31";
}

const GenComp = () => {
    let options = ["Rock", "Paper", "Scissors"];
    let compID = Math.floor(Math.random() * 3);
    return options[compID];
}
