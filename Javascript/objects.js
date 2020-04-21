function createPerson(){
    var person = new Object();
    person.name = "Tim";
    person.designation = "MD";
    person.phone = 043565;

    return person;
}

var jim = createPerson();

function createPersonWithBlank(){
    var person ={};
    person.name = "Tom";
    person.designation = "MD";
    person.phone = 043565;

    return person;
}

jim = createPersonWithBlank();

function createPersonWithoutDot(){
    var person ={};
    person['name'] = "Vin Diesel";
    person['designation'] = "MD";
    person['phone'] = 043565;

    return person;
}

jim = createPersonWithoutDot();

alert("Name: " + jim.name + "\nDesignation: " + jim.designation + "\nPhone No: " +  jim.phone);

function createPersonWithPropin(){
    var person ={'name' : "The Rock",
    'designation' : "MD",
    'phone' : 043565
    }

    return person;
}

jim = createPersonWithPropin();
alert("Name: " + jim.name + "\nDesignation: " + jim.designation + "\nPhone No: " +  jim.phone);

function Person (){
    this.name = "Tony";
    this.age = 50;
    this.mStatus = "Married";
}

jim = new Person();

var Animal = {
    type : "Invertibrates",
    displayType : function(){alert("Type is : " +this.type);} 
}

var horse = Object.create(Animal);
horse.type = "Four Legged";
horse.displayType();

var employee = {
    name : "Jonny Stark",
    age : 25,
    designation : "Intern"
}

var employees = "";
for (e in employee){
    employees  += e +": ";
}

console.log("Before Deletion : " + employees);

delete employee.age;

var employees = "";
for (e in employee){
    employees  += e +": ";
}

console.log("After Deletion : " + employees);