window.addEventListener("DOMContentLoaded", function(){

var humanScore = document.getElementById("humanScore");
var hScore = 0;
var aiScore= 0;
var computerScore = document.getElementById("computerScore");
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var status =document.getElementById("status");
var playerHuman ="";
var playerAI =["rock", "paper", "scissors"];
var playerAIgo ="";
var buttons= document.querySelectorAll("button");

for (i=0; i< buttons.length; i++){
  buttons[i].addEventListener("click", turn);
}

function turn(){
  playerHuman = this.getAttribute('id');
  status.textContent= playerHuman;
  playerAIgo = playerAI[Math.floor(Math.random()*3)];
  console.log(playerAIgo);
  checkforwin();
  console.log(hScore);
  humanScore.innerHTML = hScore;
  computerScore.innerHTML = aiScore;
}

function checkforwin(){
  switch (playerHuman){
      case "rock":
        if (playerAIgo === "paper"){
          aiScore = aiScore +1;
        }else if (playerAIgo === "scissors"){
          hScore = hScore +1;
        }
        break;

      case "paper":
        if (playerAIgo === "scissors"){
          aiScore = aiScore +1;
        }else if (playerAIgo === "rock"){
          hScore = hScore +1;
        }
        break;
      case "scissors":
      if (playerAIgo === "rock"){
        aiScore = aiScore +1;
      }else if (playerAIgo === "paper"){
        hScore = hScore +1;
      }
      break;
  }
}



});
