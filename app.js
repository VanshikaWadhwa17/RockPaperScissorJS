let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")

const userScorePara= document.querySelector("#user-score")
const compScorePara= document.querySelector("#comp-score")


const generateCompChoice=()=>{
//rock,paper,scissors - comp will randomly generate
    const options=["rock", "paper", "scissors"];
    // we want numbers from 0-2 so multiply by 3
    const randomIdx=Math.floor(Math.random() * 3)
    return options[randomIdx]

}

const playGame=(userChoice)=>{
//console.log("user choice =", userChoice)
//generate computer choice -> modular programming (every fxn will perform one action each)
const compChoice=generateCompChoice()
//console.log("comp choice =", compChoice)
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
    showWinner(userWin, userChoice, compChoice)
}
}

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        //console.log("you win")
        userScore++
        userScorePara.innerText=userScore
        msg.innerText= `You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green"
    }
    else{
        //console.log("you loose")
        compScore++
        compScorePara.innerText=compScore
        msg.innerText= `You Lost! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor="red"
    }
}

const drawGame=()=>{
    //console.log("Game was Draw")
    msg.innerText= "Game Was Draw. Play Again!"
    msg.style.backgroundColor="#081b31"
}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice)
    })
})

