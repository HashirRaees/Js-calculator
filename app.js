const display = document.getElementById("display");
// function to display everything
function toDisplay(e) {
  display.value += e;
}
//function to clear everything
function clearAll(){
    display.value = "";
}
// function to clear a single number or character
function clearSingle(input){
    display.value = display.value.slice(0,-1)
}
function calculate(){
    display.value = eval(display.value);
}