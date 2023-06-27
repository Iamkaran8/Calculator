var button = document.getElementById("display");

function calc(number){
    button.innerHTML = button.innerHTML + number; 
}

function calculate(){
    button.innerHTML = eval(button.innerHTML);
  
}
function del(){     
    button.innerHTML = "";
}

