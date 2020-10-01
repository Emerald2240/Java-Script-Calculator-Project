
function checkOperator() {
    //console.log("Our function has been called");
    var opera = document.getElementById("operator");
    opera = parseInt(opera.value);
    //var display = document.getElementById("ans");
    //display.innerHTML = `${opera}`;
    if (opera == 0) {
        addition();
    }

    if (opera == 1) {
        subtraction();
    }

    if (opera == 2) {
        multiplication();
    }

    if (opera == 3) {
        division();
    }

}



function addition() {
    console.log("Our add function has been called");
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");

    var sum = parseInt(num1.value) + parseInt(num2.value);
    //document.write(`<h1>`+sum+`</h1>`);
    var display = document.getElementById("ans");
    display.innerHTML = `${sum}`;
}

function subtraction() {
    console.log("Our subtract function has been called");
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");

    var sum = parseInt(num1.value) - parseInt(num2.value);
    //document.write(`<h1>`+sum+`</h1>`);
    var display = document.getElementById("ans");
    display.innerHTML = `${sum}`;
}

function multiplication() {
    console.log("Our multiplication function has been called");
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");

    var sum = parseInt(num1.value) * parseInt(num2.value);
    //document.write(`<h1>`+sum+`</h1>`);
    var display = document.getElementById("ans");
    display.innerHTML = `${sum}`;
}

function division() {
    console.log("Our division function has been called");
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");

    var sum = parseInt(num1.value) / parseInt(num2.value);
    //document.write(`<h1>`+sum+`</h1>`);
    var display = document.getElementById("ans");
    display.innerHTML = `${sum}`;
}