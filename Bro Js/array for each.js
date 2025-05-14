
// let students = ["sponge bob","patrick","fuad"];

// students.forEach(capitalize);
// students.forEach(print);

// function capitalize(element,index,array){

//     array[index] = element[0].toUpperCase() + element.substring(1);
// }

// console.log(students[0]);

// function print(element){
//     console.log(element);
// }

let numbers = [1,2,3,4,5,6,7];
let squares = numbers.map(square);
squares.forEach(print);

function square(element){
    return Math.pow(element,2);
}

function print(element){
    console.log(element);
}













