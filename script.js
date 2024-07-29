let para = document.querySelector("p");

    //btnChoice[i].addEventListener("click", getComputerChoice());


function getComputerChoice(){
    let choices = ['rock','paper','scissors']
    let choice = choices[Math.floor(Math.random * choices.length)]
    return choice
}

function getHumanChoice(){
    let btnChoice = document.querySelectorAll(".btn");
    let choice;
    btnChoice.forEach((item)=> {item.addEventListener("click",()=>{
        choice = item.value;
        para.textContent = `You choose ${choice}!`;
    })})
    document.body.appendChild(para);
        
    }

getHumanChoice()``