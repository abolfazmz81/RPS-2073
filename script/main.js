let ComScore = 0;
let PlayerScore = 0;

const button = document.getElementById("submit")
button.addEventListener("click", (event) => {
    event.preventDefault();

    const Paper = document.getElementById("Paper");
    const Rock = document.getElementById("Rock");
    const Scissor = document.getElementById("Scissor");
    let num = Math.ceil(Math.random() * 3);

    const winner = document.getElementById("winner");
    const scoreBoard = document.getElementById("scoreBoard");
    const ComChoice = document.getElementById("ComChoice");

    if(Paper.checked || Rock.checked || Scissor.checked){
        button.value = " PLAY AGAIN "
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

    }
    // 1 is Rock, 2 is Scissor and 3 is Paper
    if(Paper.checked){
        switch(num){
            case 1:{
                winner.innerText = "You won!";
                winner.style.color = "green";
                PlayerScore++;
                break;
            }
            case 2:{
                winner.innerText = "Computer won!";
                winner.style.color = "color: red";
                ComScore++;                
                break;
            }
            case 3:{
                winner.innerText = "Draw!";
                winner.style.color = "color: white";               
                 break;
            }
        } 
    }
    else if(Rock.checked){
        switch(num){
            case 2:{
                winner.innerText = "You won!";
                winner.style.color = "green";
                PlayerScore++;
                break;
            }
            case 3:{
                winner.innerText = "Computer won!";
                winner.style.color = "red";
                ComScore++;                
                break;
            }
            case 1:{
                winner.innerText = "Draw!";
                winner.style.color = "white";               
                 break;
            }
        } 
    }
    else if(Scissor.checked){
        switch(num){
            case 3:{
                winner.innerText = "You won!";
                winner.style.color = "green";
                PlayerScore++;
                break;
            }
            case 1:{
                winner.innerText = "Computer won!";
                winner.style.color = "red";
                ComScore++;                
                break;
            }
            case 2:{
                winner.innerText = "Draw!";
                winner.style.color = "white";               
                 break;
            }
        } 
    }

    scoreBoard.innerText = " YOU " + PlayerScore + " : " + ComScore + " AI ";
})