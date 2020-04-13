//The default value that is returned is the value undefined.

/*
Categories of function

Named function
Anonymous function
Self Invoking function
Constructors
*/

//Named function
/*
function addNumbers(num1, num2){
    console.log("We are now defining the function");
    return num1+num2;
}

console.log(addNumbers(596,1584));
var sum = addNumbers(1450,919);
console.log(sum);
*/

//Anonymous  function
/*
var anonymous = function(a,b){
    console.log("This is anoymous function");
    return a+b;
}

anonymous(16,56);   

setTimeout(function() {
    console.log("this is anonymous function");
}, 5000);
*/

//Constructors
/*
var cons = new Function("a","b", "console.log('inside constructor function'); return a+b;");

console.log(cons(8,6));
*/

//Self Invoking function
 
(function(a,b){
    console.log("inside self invoking function");
    return a+b;
})(6+4);