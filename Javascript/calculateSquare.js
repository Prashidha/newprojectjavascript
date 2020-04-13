//Named Function
function calculateSquare(num){
      return num*num;
}

document.write(calculateSquare(64)) + "\n";

//Anonymous Function

var newCalculate = function(num1){
    return num1*num1;
}

document.write(newCalculate(6)) + "\n";

//Contructor

var newConst = new Function("num2", "return num2*num2");

document.write(newConst(45)) + "\n";

//Self Invokinfg function

document.write((function(num3){
  return(num3*num3);    
})(9));
