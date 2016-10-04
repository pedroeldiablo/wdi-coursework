var spockjects = spockjects || {};

spockjects.init = function(){
  this.humanScore = document.getElementById("humanScore");
  this.hScore = 0;
  this.aiScore= 0;
  this.computerScore = document.getElementById("computerScore");
  this.rock = document.getElementById("rock");
  this.paper = document.getElementById("paper");
  this.scissors = document.getElementById("scissors");
  this.lizard = document.getElementById("lizard");
  this.spock = document.getElementById("spock");
  this.status =document.getElementById("status");
  this.playerHuman ="";
  this.playerAI =["rock", "paper", "scissors", "spock", "lizard"];
  this.playerAIgo ="";
  this.buttons= document.querySelectorAll("button");

  this.initEventListeners();
};

spockjects.initEventListeners =function(){
  for (i=0; i< this.buttons.length; i++){
    this.buttons[i].addEventListener("click", this.turn.bind(this));
  }
};

spockjects.turn = function(e){
  this.playerHuman = e.target.getAttribute('id');
  this.status.textContent= this.playerHuman;
  this.playerAIgo = this.playerAI[Math.floor(Math.random()*this.playerAI.length)];
  // console.log(playerAIgo);
  this.checkforwin();
  // console.log(hScore);
  this.humanScore.innerHTML = this.hScore;
  this.computerScore.innerHTML = this.aiScore;
};

spockjects.checkforwin= function (){
  switch (this.playerHuman){
      case "rock":
        if (this.playerAIgo === "paper" || this.playerAIgo === "spock"){
          this.aiScore++;
        }else if (this.playerAIgo === "scissors" || this.playerAIgo === "lizard"){
          this.hScore++;
        }
        break;

      case "paper":
        if (this.playerAIgo === "scissors" || this.playerAIgo === "lizard"){
          this.aiScore++;
        }else if (this.playerAIgo === "rock" || this.playerAIgo === "spock"){
          this.hScore++;
        }
        break;
      case "scissors":
      if (this.playerAIgo === "rock" || this.playerAIgo === "spock"){
        this.aiScore++;
      }else if (this.playerAIgo === "paper" || this.playerAIgo === "lizard"){
        this.hScore++;
      }
      break;
      case "lizard":
        if (this.playerAIgo === "scissors" || this.playerAIgo === "rock"){
          this.aiScore++;
        }else if (this.playerAIgo === "paper" || this.playerAIgo === "spock"){
          this.hScore++;
        }
        break;
      case "spock":
        if (this.playerAIgo === "lizard" || this.playerAIgo === "paper"){
          this.aiScore++;
        }else if (this.playerAIgo === "rock" || this.playerAIgo === "scissors"){
          this.hScore++;
        }
        break;
      }
};

document.addEventListener("DOMContentLoaded", spockjects.init.bind(spockjects));
