window.addEventListener("DOMContentLoaded", function(){

var humanScore = document.getElementById("humanScore");
var compuerScore = document.getElementById("compuerScore");
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var status =document.getElementById("status");
var playerHuman ="";
var playerAI =["rock", "paper", "scissors"];

var buttons= document.querySelectorAll("button");
  for (i=0; i< buttons.length; i++){
    buttons[i].addEventListener("click", turn);
  }

  function turn(){
    playerHuman = this.getAttribute('id');
    status.textContent= playerHuman;
    var playerAIgo = playerAI[Math.floor(Math.random()*3)];
    console.log(playerAIgo);
  }











});
