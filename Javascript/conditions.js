//if-else-if-else
/*
var age = prompt("Enter your age");
age = parseInt(age);

if(age>60){
    document.write("As you are greater than 60 years old, you have to control your sugar and salt intake");
}
else if (age > 30) {
    document.write("As you are greater than 30 years old, you have to take good care of your health");
}
else{
    document.write("As you are young you can enjoy deep fried noodles");
}
*/

//Switch

var weight = parseFloat(prompt("Let me guess your weight"));

switch(weight)
{
    case 1: document.write("Weight is 1");
           break;
    case 2: document.write("Weight is 2");
           break;
    case 3: document.write("Weight is 3");
           break;
    default:  document.write("I was unable to guess you weight");

}