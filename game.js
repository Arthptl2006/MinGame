let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const UserScorePara = document.querySelector("#user-score");
const CompScorePara = document.querySelector("#comp-score");

const gencompchoice = () => {
    let option  = ["rock","paper","scissors"];
    const idx = Math.floor(Math.random() * 3);
    return option[idx];
};

let ShowWinner = (userWin,userchoice ,compchoice) => {
    if(userWin) {
        userscore++;
        UserScorePara.innerText = userscore;
        msg.innerText = `You Win! Your ${userchoice} beatws ${compchoice}`;
        msg.style.backgroundColor = "Green";
        
    } else {
        compscore++;
        CompScorePara.innerText = compscore;
        msg.innerText = `You Lose, ${compchoice} beatws Your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const DrawGame = () => {
    msg.innerText = "Game Was Draw.";
    msg.style.backgroundColor = "#081b31";
}

const PlayGame = (userchoice) => {
    const compchoice = gencompchoice();

    if(userchoice === compchoice) {
        // Draw Games
        DrawGame();
    } else {
        let userWin = true;
        if(userchoice === "rock") {
            //scissors, paper
            userWin = compchoice === "paper" ? false : true;
        } else if(userchoice === "paper") {
            //rock, scissors
            userWin = compchoice === "scissors" ? false : true;
        } else {
            // rock,paper
            userWin = compchoice ==="rock" ? false : true;
        }
        ShowWinner(userWin ,userchoice ,compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        PlayGame(userchoice)
    });
});