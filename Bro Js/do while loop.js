
//do while loops
// let username;

// do{
//     username= window.prompt("Enter your name");
// }while(username=="");

//     console.log("Hello", username);

// for loop

// for(let counter=1; counter<=15;counter+=5){
//     console.log(counter);
// }

// console.log("Happy new year");
let symbol = window.prompt("Please enter the symbol");
let rows = window.prompt("Enter the number of rows");
let columns = window.prompt("Enter the number of columns");


for (let i = 1; i <= rows; i+=1){
    for (let j = 1; j <= columns; j += 1) {
        document.getElementById("table").innerHTML += symbol;
    }
    document.getElementById("table").innerHTML +="</br>";
}


