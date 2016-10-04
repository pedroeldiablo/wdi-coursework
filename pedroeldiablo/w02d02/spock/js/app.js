window.addEventListener("DOMContentLoaded", function(){

var humanScore = document.getElementById("humanScore");
var hScore = 0;
var aiScore= 0;
var computerScore = document.getElementById("computerScore");
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var lizard = document.getElementById("lizard");
var spock = document.getElementById("spock");
var status =document.getElementById("status");
var playerHuman ="";
var playerAI =["rock", "paper", "scissors", "spock", "lizard"];
var playerAIgo ="";
var buttons= document.querySelectorAll("button");

for (i=0; i< buttons.length; i++){
  buttons[i].addEventListener("click", turn);
}

function turn(){
  playerHuman = this.getAttribute('id');
  status.textContent= playerHuman;
  playerAIgo = playerAI[Math.floor(Math.random()*playerAI.length)];
  console.log(playerAIgo);
  checkforwin();
  console.log(hScore);
  humanScore.innerHTML = hScore;
  computerScore.innerHTML = aiScore;
}

function checkforwin(){
  switch (playerHuman){
      case "rock":
        if (playerAIgo === "paper" || playerAIgo === "spock"){
          aiScore = aiScore +1;
        }else if (playerAIgo === "scissors" || playerAI === "lizard"){
          hScore = hScore +1;
        }
        break;

      case "paper":
        if (playerAIgo === "scissors" || playerAIgo === "lizard"){
          aiScore = aiScore +1;
        }else if (playerAIgo === "rock" || playerAIgo === "spock"){
          hScore = hScore +1;
        }
        break;
      case "scissors":
      if (playerAIgo === "rock" || playerAIgo === "spock"){
        aiScore = aiScore +1;
      }else if (playerAIgo === "paper" || playerAIgo === "lizard"){
        hScore = hScore +1;
      }
      break;
      case "lizard":
        if (playerAIgo === "scissors" || playerAI === "rock"){
          aiScore = aiScore +1;
        }else if (playerAIgo === "paper" || playerAIgo === "spock"){
          hScore = hScore +1;
        }
        break;
      case "spock":
        if (playerAIgo === "lizard" || playerAI === "paper"){
          aiScore = aiScore +1;
        }else if (playerAIgo === "rock" || playerAI === "scissors"){
          hScore = hScore +1;
        }
        break;
  }
}

});
