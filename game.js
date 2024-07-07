const choices = document.querySelectorAll(".choices");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");
const winStatus = document.querySelector("#win-status");

let userScoreCount=0;
let compScoreCount=0;


for (let choice of choices) {
    choice.addEventListener("click", () => {
        playGame(choice.getAttribute("id"));
    })
}

const playGame = (choice) => {
    let uchoice = choice;
    let cchoice = compChoice();

    if (uchoice == cchoice) {
        console.log("game draw")
        winStatus.innerText="Game Draw!";
    }else{
        
        let userWin = true;
        if (uchoice == "rock") {
            //paper, scisor
            userWin = cchoice == 'paper' ? false : true;
        }else if(uchoice=="paper"){
            userWin= cchoice=='scisor'?false:true;
        }else{
            userWin= cchoice=='rock'?false:true;
        }

        if(userWin){
            winStatus.innerText=`You Win! your ${uchoice} beats ${cchoice}`;
            userScoreCount++;
            userScore.innerText=userScoreCount;
        }else{
            winStatus.innerText=`You lose! ${cchoice} beats your ${uchoice}`;
            compScoreCount++;
            compScore.innerText=compScoreCount;
        }
    }

}

const compChoice = () => {
    const choices = ["rock", "paper", "scisor"];
    const compchoice = choices[Math.floor(Math.random() * 3)];
    return compchoice;
}