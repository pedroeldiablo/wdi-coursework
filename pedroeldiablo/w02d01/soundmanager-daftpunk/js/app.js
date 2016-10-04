window.addEventListener("DOMContentLoaded", function(){
var noises1 =document.getElementById("noises");
var sources =[];
var audFiles =[];
// var example = "/sounds/after.wav";

var sounds= document.querySelectorAll("li");
  console.log(sounds);

for (i=0; i< sounds.length; i++){
  sources.push("../sounds/" + sounds[i].getAttribute('id') + ".wav");
  audFiles.push(sounds[i].getAttribute('id'));
  sounds[i].setAttribute("src", sources[i]);
  sounds[i].addEventListener("click", play);
};

console.log(audFiles);
// console.log(sources);

// for (i=0; i< sounds.length; i++){
//   console.log(getAttribute("src", "sounds[i]"));
// };

function play(){
  noises1.src = sources[i];
  noises1.play();
  this.textContent = "playing";
};

});

//   sounds[i].setAttribute("src", "sounds/"+ sounds[i].getAttribute('id') + ".wav");
// };









  // var after = document.getElementById("after").setAttribute("src", "sounds/after.wav");
  // var better= document.getElementById("better").setAttribute("src", "sounds/better.wav");
  // var do_it= document.getElementById("do_it").setAttribute( "src", "sounds/after.wav");
  // var ever= document.getElementById("ever").setAttribute("src", "sounds/ever.wav");
  // var faster= document.getElementById("faster"). setAttribute("src", "sounds/faster.wav");
  // var harder= document.getElementById("harder").setAttribute("src", "/sounds/harder.wav");
  // var hour= document.getElementById("hour").setAttribute("src", "sounds/hour.wav");
  // var make_it= document.getElementById("make_it").setAttribute("src", "sounds/make_it.wav");
  // var makes_us= document.getElementById("make_us").setAttribute("src", "sounds/makes_us.wav");
  // var more_than= document.getElementById("more_than").setAttribute("src", "sounds/more_than.wav");
  // var never= document.getElementById("never").setAttribute("src", "sounds/never.wav");
  // var our= document.getElementById("our").setAttribute("src", "sounds/our.wav");
  // var over= document.getElementById("over").setAttribute("src", "sounds/over.wav");
  // var stronger= document.getElementById("stronger").setAttribute("src", "sounds/stronger.wav");
  // var work_is= document.getElementById("work_is").setAttribute("src", "sounds/work_is.wav");
  // var work_it= document.getElementById("work_it").setAttribute("src", "sounds/work_it.wav");
  //
  // var sounds= document.querySelectorAll("li");
  //   console.log(sounds);
  // for (i=0; i< sounds.length; i++){
  //   console.log(sounds[i].getAttribute("src"));
  // //   sounds[i].addEventListener("click", play);
  // function play(){
  //     sounds[i].play();
//   };
//


//   sounds[i].setAttribute("src", "sounds/"+ sounds[i].getAttribute('id') + ".wav");
// };
  // console.log(liid());

  // for (i=0; i< play.length; i++){
  //   play[i].addEventListener("click", play);
  //   var liid = play[i].getAttribute("id");
  //   this.setAttribute("src",("sounds/" +liid+".wav"));
  // };


  //   source_file = play[i].setAttribute("src","("sounds/" + play[i].getAttribute("id")+ ".wav")");
  //   console.log(source_file[i].getAttribute("src"));
  //   function play(){
  //     this.play();
  //   };
  // }
  //
  //

  //
  // for ()
  //
  // var noiseMaker = document.getElementById("noise-maker");
  // var better = document.getElementById("better");

  // noiseMaker.controls = true;
  // noiseMaker.muted = true;
// document.getElementById("playButton").addEventListener("click", play);
// noiseMaker.src = "sounds/after.wav";
//   function play(){
//     noiseMaker.play();
//   };

//   document.getElementById("better2").addEventListener("click", play);
//   better.src= "sounds/better.wav";




//
// var soundfiles=document.querySelectorAll("button");
//
