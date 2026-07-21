
let curr_round=1;
let rounds=5;
let humanScore=0;
let compScore=0;


const humanS=document.querySelector(".humanscore");
const compS=document.querySelector(".computerscore");
const output = document.querySelector(".output");
const helptext= document.querySelector(".helptext")
const input=document.querySelectorAll(".input");
const outputtext=document.querySelector(".comptext")
const result = document.querySelector(".result");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){

    let val=getRandomInt(3);

    if(val===0){
        return "🪨"
    } 
    else if(val===1){
        return "📃"
    } 
    else{
        return "✂️";
    } 
}


function playround(playerChoice){
    if(curr_round>rounds) return;

    let compChoice=getComputerChoice();
    output.textContent=compChoice;

    if(playerChoice===compChoice){
        result.textContent = "It's a tie!";
        compScore++;
        humanScore++;
    }
    else if(playerChoice==="🪨" && compChoice==="📃" || playerChoice==="📃" && compChoice==="✂️" || playerChoice==="✂️" && compChoice==="🪨"){
        compScore++;
        result.textContent = "Computer wins this round!";
    }
    else{
        humanScore++;
        result.textContent = "You win this round!";
    }

    helptext.textContent = `Round ${curr_round} of ${rounds}`;

    curr_round++;
    humanS.textContent = humanScore;
    compS.textContent = compScore;

    if(curr_round > rounds) {
        if(humanScore > compScore) {
            helptext.textContent = "You WIN! 🎉 Reload to play again!";
        } else if(compScore > humanScore) {
            helptext.textContent = "Computer WINS! 😈 Reload to play again!";
        } else {
            helptext.textContent = "It's a TIE! Reload to play again!";
        }
    }
}

input.forEach((button) => {
    button.addEventListener("click",()=>{
        playround(button.textContent);
    });
});