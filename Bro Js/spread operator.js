// spread operator = allows an iterable such a
//                   an array or string to be expanded in place where zero or more arguments are expected



// let username = "Fuad Mahmud";

// let numbers = [1,2,3,4,5,6,7,8,9,12];

// let maximum = Math.max(...numbers);
// console.log(maximum);

// console.log(...username);

// let class1 = ["Sponge bob","Patrick","Sandy"];
// let class2 = ["Fuad","Lewis","Walker"];

// class1.push(...class2);

// console.log(...class1);

// let a = 1;
// let b = 2;
// let c = 4;
// let d = 6;

// console.log(sum(a,b,c,d));

// // function sum(a,b){
// //     return a+b;
// // }
// // function sum(a,b,c){
// //     return a+b+c;
// // }

// function sum(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total += number;
//     }
//     return total;
// }

sum(2, 3, displayDom);

function sum(a,b, myFun){
    let result = a+b;
    myFun(result);
}

function displayConsole(output){
    console.log(output);
}
function displayDom(output){
    document.getElementById("displayLabel").innerHTML = output;
}

