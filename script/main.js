let ComScore = 0;
let PlayerScore = 0;

const button = document.getElementById("submit")
button.addEventListener("click", (event) => {
    event.preventDefault();

    const Paper = document.getElementById("Paper");
    const Rock = document.getElementById("Rock");
    const Scissor = document.getElementById("Scissor");
    
    let num = Math.floor(Math.random() * 3) + 1 ;

    const winner = document.getElementById("winner");
    const scoreBoard = document.getElementById("scoreBoard");
    const ComChoice = document.getElementById("ComChoice");

    switch(num){
        case 1:{
            ComChoice.innerText = " Computer chose 'Rock'!"
            break;
        }
        case 2:{
            ComChoice.innerText = " Computer chose 'Scissor'!"
            break;
        }
        case 3:{
            ComChoice.innerText = " Computer chose 'Paper'!"
            break;
        }
    }
    
})