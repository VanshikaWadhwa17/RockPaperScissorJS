let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const generateCompChoice=()=>{
//rock,paper,scissors - comp will randomly generate
    const options=["rock", "paper", "scissors"];
    // we want numbers from 0-2 so multiply by 3
    const randomIdx=Math.floor(Math.random() * 3)
    return options[randomIdx]

}

const playGame=(userChoice)=>{
console.log("user choice =", userChoice)
//generate computer choice -> modular programming (every fxn will perform one action each)
const compChoice=generateCompChoice()
console.log("comp choice =", compChoice)
if(userChoice===compChoice){
    //Draw
    drawGame()
}
else{
    let userWin=true
    if(userChoice === "rock"){
        userWin = compChoice ==="paper" ? false : true
    }
    else if(userChoice === "paper"){
        userWin = compChoice === "scissors" ? false : true
    }
    else{
        userWin = compChoice === "rock" ? false : true
    }
    showWinner(userWin)
}
}

const showWinner=(userWin)=>{
    if(userWin){
        console.log("you win")
    }
    else{
        console.log("you loose")
    }
}

const drawGame=()=>{
    console.log("Game was Draw")
}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice)
    })
})

