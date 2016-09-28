
// add me
// var P = parseFloat(prompt("How much are you borrowing?"));
//   var n = parseFloat(prompt("How many years is your mortgage for?")) * 12;
//   var i = parseFloat(prompt("What is the % interest rate of the mortgage?")) / 12/100;
//   console.log(i);
//   var topLine = i*(Math.pow((1+i),n));
//   var bottomLine = (Math.pow((1+i),n))-1;
//   var monPay = (P * (topLine / bottomLine)).toFixed(2);
//   alert("Your monthly repayments will be: £" + monPay);
var metric_imp=(prompt("Do you prefer metric or imperial?"));

switch(metric_imp){
  case "imperial":
  var weight=parseFloat(prompt("How much do you weigh in pounds?"));
  var height=parseFloat(prompt("What is your height in inches?"));
  var bmi= (weight/height**2) * 703;
  break;
  case "metric":
  var weight=parseFloat(prompt("How much do you weigh in kgs?"));
  var height=parseFloat(prompt("What is your height in metres?"));
  var bmi= (weight/height**2);
  break;
  default:
  alert("Opps, I didn't recognise what you entered");
}

switch(bmi){
  case bmi<=18.5:
  alert("Looks like you're underweight");
  break;
  case bmi>=18.5 && bmi<25:
  alert("You're in the optimal range");
  break;
  case bmi>=25 && bmi <30:
  alert("You're overweight");
  break;
  case bmi >= 30:
  alert("You're obese");
  break;
  default:
  alert("Opps what's happened here?")
}




var loan=parseFloat(prompt("How much are you borrowing?"));
var interest=parseFloat(prompt("What is the interest rate?"))/12/100;
var years=parseFloat(prompt("How many years is the mortgage?"))*12;
// var payments=parseFloat(prompt("Number of payments a year?"));


var topLine = interest*(1 + interest)**years;
var bottomLine= ((interest+1)**years)-1

var monthly =((loan)*(topLine/bottomLine)).toFixed(2);

alert("Your monthly repayment is £" +monthly);

var whatsum= prompt ("What sum are we doing? add,minus,multiply,divide,power,mortgage")
 // number1 = parseFloat(number1)

var number1 =parseFloat(prompt("Enter first number"));

if (whatsum !=="root"){
  var number2 =parseFloat(prompt("Enter second number"));
};


switch(whatsum){
  case "add":
  alert(number1 + number2);
  break;
  case "minus":
  alert(number1 - number2);
  break;
  case "multiply":
  alert(number1 * number2);
  break;
  case "divide":
  alert(number1 / number2);
  break;
  case "power":
  alert(number1**number2);
  break;
  case "root":
  alert(Math.sqrt(number1));
  break;
  default:
  alert("I don't know how to calculate that");
}

//
//
//
//
//
// case square
//
// number1**
//
// case root
