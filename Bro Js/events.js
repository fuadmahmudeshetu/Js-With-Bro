// const clicking = document.getElementById("myButton");
// const element = document.getElementById("myInput");
// // element.onload = doSomething;

// element.onchange = doSomething;
// function doSomething(){
//     alert("You Click The Click Button");
// }


// const element = document.getElementById("myDiv");

// element.onmouseover = changeTheColor;
// element.onmouseout = resetTheColor;

// function changeTheColor(){
//     element.style.backgroundColor = "red";
// }
// function resetTheColor(){
//     element.style.backgroundColor = "lightgreen";
// }

const dark = document.getElementById("myButton1");
const light = document.getElementById("myButton2");
const bodyPart = document.body;

dark.onclick = darkMode;
light.onclick = lightMode;

function darkMode(){
    bodyPart.style.backgroundColor = "black";
}

function lightMode(){
    bodyPart.style.backgroundColor = "white";
}

/* .addEventListener(event, function, useCapture)
    you can add many event handler to one element
    even the same event that that invoke different function
*/


const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click", changeRed);
outerDiv.addEventListener("click", changeRed);

function changeRed(){
    alert(`you selected ${this.id}`);
   this.style.backgroundColor = "red";
}

function changeGreen(){
    element.style.backgroundColor = "lightgreen";
}

function onClick(){
    
}