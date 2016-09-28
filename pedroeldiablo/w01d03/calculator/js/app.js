var whatquestion = true;

whatquestion:
while (whatquestion === true){
  var whichsum= prompt ("What tool would you like? (A) BMI Calculator (B) Mortgage (C) Calculator (D) No more questions");
  switch(whichsum){

  case "D":
  var whatquestion = false;
  break;

  case "A":
    var metric_imp=(prompt("Let's calcualte your BMI. Do you prefer metric or imperial?"));

    switch(metric_imp){
          case "imperial":
            var weight=parseFloat(prompt("How much do you weigh in pounds?"));
            var height=parseFloat(prompt("What is your height in inches?"));
            var bmi= (weight/height**2) * 703;
            alert("Your BMI is "+bmi);
            break;
          case "metric":
            var weight=parseFloat(prompt("How much do you weigh in kgs?"));
            var height=parseFloat(prompt("What is your height in metres(i.e. 1.8)?"));
            var bmi= (weight/height**2);
            alert("Your BMI is "+bmi);
            break;
          default:
            alert("Opps, I didn't recognise what you entered");
      }

        if(bmi < 18.5){
          alert("A strong breeze could take you away. Looks like you're underweight with a BMI below 18.5");
        } else if (bmi<25){
          alert("Practically perfect. You're in the optimal range. BMIs between 18.5 but less than 25 are normal.");
        } else if (bmi<30) {
          alert("Your BMI is a little high. Been hitting the gym, or hitting the cake tin? You're BMI is over 25 but less than 30");
        } else if (bmi>=30){
          alert("You're either obese or a beast. Your BMI is in the very high range over 30. Could be muscle or fat. Check with a healthcare professional");
        }else{
          alert("Opps what's happened here?")
        };
        break;

case "B":
// check answers are numbers. 
      var loan=parseFloat(prompt("How much are you borrowing in pounds?"));
      var interest=parseFloat(prompt("What is the annual percentage interest rate?"))/12/100;
      var years=parseFloat(prompt("How many years is the mortgage?"))*12;
// var payments=parseFloat(prompt("Number of payments a year?"));
      var topLine = interest*(1 + interest)**years;
      var bottomLine= ((interest+1)**years)-1
      var monthly =((loan)*(topLine/bottomLine)).toFixed(2);
      alert("Your monthly repayment is £" +monthly);
      break;

case "C":
      var whatsum= prompt ("What sum are we doing? add,minus,multiply,divide,power,root")
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
      break;
    }
      // var whatquestion= prompt ("Would you like to ask a question:true or false?");
      // break;
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
// switch(bmi){
//   case (18.5):
//   alert("Looks like you're underweight");
//   break;
//   case (18.5 && 25):
//   alert("You're in the optimal range");
//   break;
//   case (25 && 30):
//   alert("You're overweight");
//   break;
//   case ( 30):
//   alert("You're obese");
//   break;
//   default:
//   alert("Opps what's happened here?")
// }
// add me
// var P = parseFloat(prompt("How much are you borrowing?"));
//   var n = parseFloat(prompt("How many years is your mortgage for?")) * 12;
//   var i = parseFloat(prompt("What is the % interest rate of the mortgage?")) / 12/100;
//   console.log(i);
//   var topLine = i*(Math.pow((1+i),n));
//   var bottomLine = (Math.pow((1+i),n))-1;
//   var monPay = (P * (topLine / bottomLine)).toFixed(2);
//   alert("Your monthly repayments will be: £" + monPay);
