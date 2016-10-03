// Create board. Find array of class "squares". square[0] will be the first square, square[1] second square top row etc.
 // add and extra class? set value ? to 0.

var b = document.querySelectorAll("li");
var squares= document.getElementsByClassName("square");
var noTurns = 0;

// document.getElementById("clearButton").addEventListener("click", reset);

// function reset (){
//   for (i =0; i< b.length; i++){
//     b[i].setAttribute("class" "squares");
//     noTurns=0;
//     document.getElementById("winner").textContent="";
//   };
// };

console.log(b);

  for (i=0; i< squares.length; i++){
  squares[i].addEventListener("click", assignCharacter);
}


for (i=0; i< squares.length; i++){

  }

function assignCharacter(){
  if (this.className ==="square"){
    if (noTurns%2 === 0){
        this.innerHTML = "X"
        document.getElementById("whoseTurn").textContent="It's O's go.";
        noTurns = noTurns + 1;
        this.setAttribute("class", "x");
        checkWinner();
        console.log(b);
    }else{
          noTurns = noTurns + 1;
          this.setAttribute("class", "o");
          this.innerHTML = "0";
          document.getElementById("whoseTurn").textContent="It's X's go.";
          console.log(b);
          checkWinner();
    };
  };
}

function checkWinner(){
  winsColumn();
  winsRow();
  winsDiagonal1();
  winsDiagonal2();
}

function winsRow() {
      for (var i = 0; i <= 6; i = i + 3) {
        if (b[i] !== "li.square" && b[i] === b[i ++] && b[i ++] === b[i + 2]) {
          console.log(b[i], b[i++], b[i+2]);
          alert = ("winner");
          document.getElementById("winner").textContent = b[i] + "-won";
        };
    };
}

function winsColumn() {
  for(var i = 0; i <= 2 ; i++) {
    if (b[i] !== "li.square" && b[i] === b[i + 3] && b[i + 3] === b[i + 6]) {
          document.getElementById("winner").innerHTML = b[i] + "-won";
        };
    };
}

function winsDiagonal1() {
  for(var i = 0; i <=1; i++) {
    if(b[i] !== "li.square" && b[i] === b[i + 4] === b[i + 8]){
    document.getElementById("winner").innerHTML = b[i] + "-won";
    };
  };
}

function winsDiagonal2(){
    for (var i =0; i<=2; i++ ){
    if (b[i+2] !== "li.square" && b[i +2] === b[i+4] === b[i +8]){
      document.getElementById("winner").innerHTML = b[i] + "-won";
    };
  };
}

  // }else if {
//
//       }else if {
//         for(var i = 0) {
//           if(b[i] !== "li.square" && b[i] === b[i + 4] === b[i + 8])||
//           (b[i] !== "E" && b[i +2] === b[i+4] === b[i +8]) {
//               this.showWinner = b[i] + "-won";
//           }
//         }
//         else if {
//           var squares === [] {
//             document.getElementById("showWinner").innerHTML =" It's a draw!"
//         }
//     }
// }
//
//
//
// function displayDate() {
//   document.getElementById("showWinner").innerHTML = Date();
// };

// .addEventListener("click", displayDate);
//
//
//
//
//
//
//
// ;
//   ;
//
//   // console.log(squares);
//
// var noTurns = 0;
//
// var assignCharacter = function(){
//   if (noTurns%2 === 0){
//     console.log(noTurns);
//     this.text("X");
//     noTurns = noTurns++;
//       // document.getElementById("this.id").innerHTML = "x";
//     this.text("O");
//
//     }else{
//       // document.getElementById("this.id").innerHTML ="0";
//       noTurns = noTurns++;
//       console.log(noTurns);
//     };
//   }


// for (i=0; i< squares.length; i++){
//     squares[i].setAttribute("class", "empty");
//     // squares[i].addEventListener("click", assignCharacter);
// };
//   console.log(squares);

// var whichSquare =
//
// for (i=0; i< squares.length; i++){
//   console.log(squares[i].getAttribute('id'));
// }
//
// document.getElementById("whichSquare[i]").addEventListener("click", assignCharacter)
//
// var noTurns = function assignCharacter(eventy){
//   if (noTurns.length%2 === 0){
//     document.getElementById("this.id").innerHTML = "x";
//   }else{
//     document.getElementById("this.id").innerHTML ="0";
//   };
// }
//
// this.isTerminal = function() {
//         var B = this.board;

// if all row === x, or all row === o. new row from start at index +3, so 0, 3 and 6.
// check all in the row the same start of row ++ and +2. check rows aren't empty
        // for(var i = 0; i <= 6; i = i + 3) {
        //     if(B[i] !== "E" && B[i] === B[i ++] && B[i ++] === B[i + 2]) {
        //         this.showWinner = B[i] + "-won"; //update the state result
        //         // return true;
        //     }
        // }

//check columns. columns start 0, 1, 2. Next row same column +3. check columns aren't empty

        // for(var i = 0; i <= 2 ; i++) {
        //     if(B[i] !== "E" && B[i] === B[i + 3] && B[i + 3] === B[i + 6]) {
        //         this.showWinner = B[i] + "-won";
        //         // return true;
        //     }
        // }

//check diagonals. positions 0, 4 and 8 top left bottom right. +4? This wont work for a larger board
// positions 2, 4, 6 top right, bottom left. start at +2 and +2 and +4? This wont work for a larger board
// check squares aren't empty


        // for(var i = 0) {
        //     if(B[i] !== "E" && B[i] === B[i + 4] === B[i + 8])||
        //     (B[i] !== "E" && B[i +2] === B[i+4] === B[i +8]) {
        //         this.showWinner = B[i] + "-won";
        //         // return true;
        //     }
        // }












// var whichSquare = document.getElementById('1-1');
//
// if (whichSquare.hasAttribute('[id ="1-1"]')) {
//   var attr = whichSquare.getAttribute('id');
//
// var el = document.getElementById("show_winner");
// el.innerHTML ='<p>This square is: ' + attr + '</p>';
// }



// function assignCharacter(this) {
//   document.getElementById(this.id)click.element.innerHTML ="none";
// };




//
// console.log("Hello");
// var noTurns= [];
//
// var turnCount=0;
//
//       ('#board').find("square").on('click', function(){
//             if (turnCount % 2 === 0){
//               $(this).text('X');
//               // checkVictory('X');
//             } else {
//            //player 2's turn (O)
//               $(this).text('O');
//               // checkVictory('O');
//             }
//           turnCount++;
//
//       });
//
//
//













// var msg = '<div class =\"header\"><a id \"close\" href="#">close X</a></div>';
// msg += '<div><h2>We have a winner</h2>';
// msg += '';
// msg += '.</div>';
//
// var elNote = document.createElement("div");
// elNote.setAttribute("id", "note");
// elNote.innerHTML = msg;
// document.body.appendChild(elNote);
//
// function dismissNote() {
//   document.body.removeChild(elNote);
// }
//
// var elClose =document.getElementById('close');
// elClose.addEventListener('click', dismissNote, false);

// function assignCharacter(e){
//   console.log("clickedy");
//   // getElementById("this").innerHTML = "x";
// };
