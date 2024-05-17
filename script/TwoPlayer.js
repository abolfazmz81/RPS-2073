let P1Score = 0;
let P2Score = 0;
let p1 = null;
let p2 = null;

const button = document.getElementById("submit");
const winner = document.getElementById("winner");
const scoreBoard = document.getElementById("scoreBoard");
window.addEventListener("keydown", (event) => {
    
    // 1 is Rock, 2 is Scissor and 3 is Paper
    switch (event.key) {
        case "ArrowUp":
            p2=2;
            console.log("Player2 : Scissor")
            break;
        case "ArrowLeft":
            console.log("Player2 : Rock");
            p2=1;
            break;
        case "ArrowRight":
            console.log("Player2 : Paper");
            p2=3;
            break;
        case "a":
            console.log("Player1 : Rock");
            p1=1;
            break;
        case "s":
            p1=2;
            console.log("Player1 : Scissor");
            break;
        case "d":
            p1=3;
            console.log("Player1 : Paper");
            break;
      }
      console.log("here")

})

button.addEventListener("click", (event) => {
    event.preventDefault();
    if(p1 == null || p2 == null || p1==0 || p2==0){
        return;
    }
    
    // 1 is Rock, 2 is Scissor and 3 is Paper
    if(p1 == 3){
        switch(p2){
            case 1:{
                winner.innerText = "Player1 won!";
                winner.style.color = "lightblue";
                P1Score++;
                break;
            }
            case 2:{
                winner.innerText = "Player2 won!";
                winner.style.color = "lightcoral";
                P2Score++;                
                break;
            }
            case 3:{
                winner.innerText = "Draw!";
                winner.style.color = "white";               
                 break;
            }
        } 
    }
    else if(p1 == 1){
        switch(p2){
            case 2:{
                winner.innerText = "Player1 won!";
                winner.style.color = "lightblue";
                P1Score++;
                break;
            }
            case 3:{
                winner.innerText = "PLayer2 won!";
                winner.style.color = "lightcoral";
                P2Score++;                
                break;
            }
            case 1:{
                winner.innerText = "Draw!";
                winner.style.color = "white";               
                 break;
            }
        } 
    }
    else if(p1 == 2){
        switch(p2){
            case 3:{
                winner.innerText = "Player1 won!";
                winner.style.color = "lightblue";
                P1Score++;
                break;
            }
            case 1:{
                winner.innerText = "PLayer2 won!";
                winner.style.color = "lightcoral";
                P2Score++;                
                break;
            }
            case 2:{
                winner.innerText = "Draw!";
                winner.style.color = "white";               
                 break;
            }
        } 
    }
    p1=0;
    p2=0;
    scoreBoard.innerText = " Player 1--- " + P1Score + " : " + P2Score + " ---Player 2 ";
})