function textClicked(){
    document.getElementById("abc").setAttribute("style", "color: blue");
}

function mouseOverthetext(){
    document.getElementById("abc").setAttribute("style", "color: yellow");
}


document.getElementById("abc").addEventListener("click",textClicked);

document.getElementById("abc").addEventListener("mouseover",mouseOverthetext);

function buttonClick(){
    document.getElementById("btn-submit").setAttribute("style", "color: red");
}

function validateForm(){
    //check whether the name is added or not

    var name = document.getElementById("txtname");
    var age = document.getElementById("txtage");

    if(name.value == ""){
        alert("Please enter the value for name");
    }

    if(!(isNaN(name.value))){
        alert("Value of name must not contain numbers");
    }

    if(isNaN(age.value)){
        alert("Values of age must always be number");
    }

}