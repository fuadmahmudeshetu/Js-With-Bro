
// const myButton = document.getElementById("myButton");
// const myDiv = document.getElementById("myDiv");

// myButton.addEventListener("click", begin);

// function begin() {
//     let timerId = null;
//     let degrees = 0;
//     let x = 0;
//     let y = 0;

//     timerId = setInterval(frame, 5);

//     function frame() {
//         if (x >= 200 || y >= 200) {
//             clearInterval(timerId);
//         } else {
//             degrees+=3;
//             x+=1;
//             y+=1;
//             myDiv.style.left = x +"px";
//             myDiv.style.top = y +"px";
//             myDiv.style.transform = "rotateZ("+degrees+"deg)";
//         }
//     }
// }


// function begin(){
// if(myDiv.style.display == "block"){
//     myDiv.style.display = "none"
//     }
//     else{
//         myDiv.style.display = "block";
//     }
// }

const canvas = document.getElementById("myCanvas");
const context = canvas.getContext('2d');

// context.fillStyle = "yellow";
// context.beginPath();
// context.moveTo(250,0);
// context.lineTo(0,250);
// context.lineTo(500,250);
// context.lineTo(250,0);

context.fillRect(0,0,250,250);
context.strokeStyle = "black";
context.strokeRect(0,0,250,250);

context.fillStyle = "red";
context.fillRect(250,250,250,250);
context.strokeStyle = "red";
context.strokeRect(250, 250, 250,250);

context.fillStyle = "green";
context.fillRect(0,250,250,250);
context.strokeStyle = "green";
context.strokeRect(0,250,250,250);

context.fillStyle = "yellow";
context.fillRect(250,0,250,250);
context.strokeStyle = "yellow";
context.strokeRect(250,0,250,250);

// context.fill();


const circle = document.getElementById("circle");
const celsius = circle.getContext('2d');

celsius.fillStyle = "lightblue";
celsius.strokeStyle = "darkblue"
celsius.lineWidth = 50;
celsius.beginPath();
celsius.arc(250,250,200,0, 2*Math.PI);
celsius.stroke();
celsius.fill();

const text = document.getElementById("text");
const fuad = text.getContext('2d');


fuad.font = "50px MV Boli";
fuad.fillStyle = "red";
fuad.textAlign = "center";
fuad.fillText("You Win", text.width/2,text.height/2);

