let para = document.querySelector("p");
let humanScore = 0 , computerScore = 0;
function getComputerChoice(){
    let choices = ['rock','paper','scissors']
    let choice = choices[Math.floor(Math.random() * choices.length)]
    return choice
}

function playRound(humanSelection, computerSelection) {

    if (humanSelection === computerSelection) {
        para.textContent = `\nIt's a draw! Both chose ${humanSelection}`;
    } else if (
        (humanSelection === 'rock' && computerSelection === 'scissors') ||
        (humanSelection === 'paper' && computerSelection === 'rock') ||
        (humanSelection === 'scissors' && computerSelection === 'paper')
    ) {
        para.textContent = `\nYou win! ${humanSelection} beats ${computerSelection}`;
        humanScore++;
    } else {
        para.textContent = `\nYou lose! ${computerSelection} beats ${humanSelection}`;
        computerScore++;
    }
    para.textContent  += `\nScores - Human: ${humanScore}, Computer: ${computerScore}`;
}

function main(){
    let btnChoice = document.querySelectorAll(".btn");
    let choice;
    btnChoice.forEach((item)=> {item.addEventListener("click",()=>{
        choice = item.value;
        console.log(choice)
        computer = getComputerChoice();
        playRound(choice,computer)
        if (humanScore == 5 || computerScore == 5){
            btnChoice.forEach((item)=> item.disabled = true)
        }
    let resetBtn = document.getElementById("reset")
        resetBtn.addEventListener('click',()=>{humanScore = 0,computerScore = 0
            btnChoice.forEach((item)=> item.disabled = false)
            para.textContent  = ` Fresh start!\n Scores - Human: ${humanScore}, Computer: ${computerScore}`;
        })
    })})
    
}
main()