const tocelsius = document.getElementById("r2");
const tofarhenite = document.getElementById("r1");
const result = document.getElementById("result");
const textbox = document.getElementById("i1");
let temp;
function convert(){
    if(tocelsius.checked){
        temp= Number(textbox.value);
        result.textContent = (temp - 32) * 5/9 + " °C";
    }
    else if(tofarhenite.checked){
        temp= Number(textbox.value);
        result.textContent = (temp * 9/5) + 32 + " °F";
    }
    else{
        result.textContent = "Please select a conversion type.";
    }
}