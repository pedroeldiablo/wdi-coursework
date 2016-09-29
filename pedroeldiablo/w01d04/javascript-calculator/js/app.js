document.getElementById("submitButton").addEventListener("click", doSum);
// document.getElementById("submitButton").addEventListener("submit", doSum);


function doSum(submitEvent){
  var n1 = parseFloat(document.getElementById("first_number").value);
  var n2 = parseFloat(document.getElementById("second_number").value);
  var opSelect = document.getElementById("operator").value;

    switch(opSelect){
        case "+":
        result = (n1 + n2);
        break;
        case "-":
        result = (n1 - n2);
        break;
        case "*":
        result =(n1 * n2);
        break;
        case "/":
        result(n1 / n2);
        break;
      };

document.getElementById("answer").value = result;

  // console.log("hello");
  // console.log(n2);
  // console.log(n1);
  // console.log(n1 + n2);
  // console.log(opSelect);
  // console.log(n1 + opSelect + n2);
  // console.log(result);
  submitEvent.preventDefault();
};

// document.getElementById('form_event').addEventListener("submit", calculate);
// function calculate(submitEvent){
//   var result ;
//   var num1 = parseFloat(document.getElementById("num1").value);
//   var num2 = parseFloat(document.getElementById("num2").value);
//   var calc = document.getElementById("calcSelect").value;
//   if (calc === "add"){
//     result = add(num1, num2);
//   } else if (calc === "subtract"){
//     result = subtract(num1,num2);
//   } else if (calc === "multiply") {
//     result = multiply(num1, num2);
//   } else if (calc === "divide") {
//     result = divide(num1,num2);
//   } else {
//     alert("Error");
//   }
//   console.log(result);
//   document.getElementById("result").innerHTML = result;
//   submitEvent.preventDefault();
// }
// function add(num1, num2) {
//   var result = num1 + num2;
//   return result;
// }
// function subtract(num1, num2) {
//   var result = num1 - num2;
//   return result;
// }
// function multiply(num1, num2) {
//   var result = num1 * num2;
//   return result;
// }
// function divide(num1, num2) {
//   var result = num1 / num2;
//   return result;

//
//


// console.log(first_number);
// function doSum(submitEvent){
//   console.log("hello");
