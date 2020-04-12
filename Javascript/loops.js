//For and For-in loop
/*
var subjects = ["Maths", "Physics", "English"]; 
var marks = new Array();
var num;

for(i=0; i<subjects.length; i++) {
    num = parseFloat(prompt("Please enter the marks for " +subjects[i]));
    marks[i]=num;
}

msg = "";

for(i in subjects)
    msg += subjects[i] + " marks: " + marks[i] + "\n";

alert(msg);
*/

//While and do-while loop
/*
var subjects = ["Maths", "Physics", "English"];
var marks = new Array();
i = 0;
while(i<subjects.length){ 
    num = prompt("Enter your marks in " + subjects[i] +" subject");
    marks[i]=parseInt(num);
    i++;
}

msg = "";
i = 0;

while(i<subjects.length){ 
    msg += subjects[i] + " marks: " + marks[i] + "\n";
    i++;
}

alert(msg);
*/

//Do-while loop
var i=8;
do{
    console.log(i);
} while(i<10);





