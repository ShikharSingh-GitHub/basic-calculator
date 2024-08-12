

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearD(){
    display.value = "";
}

function compute(){
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}