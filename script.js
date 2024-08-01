let para = document.querySelector("p");
let humanScore = 0 , computerScore = 0;

function getComputerChoice(){
    let choices = ['rock','paper','scissors']
    let choice = choices[Math.floor(Math.random() * choices.length)]
    console.log(choice)
    return choice
}

// function getHumanChoice(){
//     let btnChoice = document.querySelectorAll(".btn");
//     let choice;
//     btnChoice.forEach((item)=> {item.addEventListener("click",()=>{
//         choice = item.value;
//         //para.textContent = `You choose ${choice}!`;
//     })})
//     return choice;
//     //document.body.appendChild(para);
//     }

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

    para.textContent  = `\n Scores - Human: ${humanScore}, Computer: ${computerScore}`;
}





function main(){
    let btnChoice = document.querySelectorAll(".btn");
    let choice;
    btnChoice.forEach((item)=> {item.addEventListener("click",()=>{
        choice = item.value;
        console.log(choice)
        computer = getComputerChoice();
        playRound(choice,computer)
        //para.textContent = `You choose ${choice}!`;
    })})
    

    // let computer,human;
    //     human = getHumanChoice();
    //     console.log(human)
    // if (human != undefined){
    //     computer = getComputerChoice();
    //     playRound(human,computer)
    //     para.textContent += `${human},${computer}`
    // }

}
main()