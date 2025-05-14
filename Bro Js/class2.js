
// class Car{
//     constructor(model, year, color){
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }

//     drive(){
//         console.log(`You are driving ${this.model} car`);
//     }
// }

// const car1 = new Car("Musting", 2025, "Blue");
// const car2 = new Car("Range Rover", 2025, "black");
// const car3 = new Car("Musting", 2025, "green");
// const car4 = new Car("limbo", 2025, "red");

// const cars = [car1, car2, car3,car4];
// console.log(cars[3].model);
// cars[0].drive();
// cars[1].drive();
// cars[2].drive();
// cars[3].drive();


//  startRace(cars);

// function startRace(cars){
//     for(const car of cars){
//         car.drive();
//     }
// }


// changeColor(car3, "Red");
// displayInfo(car3);
// function displayInfo(car){
//     console.log(car.model);
//     console.log(car.color);
//     console.log(car.year);
// }

// function changeColor(car, color){
//     car.color = color;
// }

/* anonymous objects = Objects without a name
                       not directly referenced
                       less syntax, no need for unique names.
                       */

// class Card{
//     constructor(value, suit){
//         this.value = value;
//         this.suit = suit;
//     }
// }

// let cards = [new Card("A ", "Hearts")
//             , new Card("A ", "Spades")
//             , new Card("A ", "Diamonds")
//             , new Card("A ", "Clubs")
//             , new Card("2 ", "Heart")
//             , new Card("2 ", "Spades")
//             , new Card("2 ", "Diamonds")
//             , new Card("2 ", "Clubs")
// ];

// console.log(cards[7].value + cards[7].suit);

// cards.forEach(card => console.log(`${card.value} ${card.suit}`));

// try {
//     let x = window.prompt("Please enter your number");
//     x = Number(x);

//     if(isNaN(x)) throw "That you enter wasn't a number!";
//     if(x == "") throw "You didn't enter value";

//     console.log(`${x} is a number`);
// }catch(error){
//     console.log(error);
// }
// finally {
//     console.log("This always executes ");
// }


/* setTimeout() = invokes a function after a number of milliseconds
                  asynchronous function (doesn't pause execution)
*/

/*
let time1 = setTimeout(firstMessage, 3000);
let time2 = setTimeout(secondMessage, 6000);
let time3 = setTimeout(thirdMessage, 9000);

function firstMessage(){
    alert(`buy this course for $500!`);
}
function secondMessage(){
    alert(`This is not scam!`);
}
function thirdMessage(){
    alert(`DO IT!`);
}

document.getElementById("myButton").onclick = function(){
    clearTimeout(time1);
    clearTimeout(time2);
    clearTimeout(time3);
    alert("Thanks for buying");
}
*/

/* setInterval() = invokes a function repeatedly after a 
                    number of milliseconds
                    asynchronous function(Doesn't pause execution)
*/
// let count = 0;
// let max = window.prompt("Count up to what #?");
// max = Number(max);

// let setTimer = setInterval(countUp, 1000);

// function countUp(){
//     count += 1;
//     console.log(count);
//     if(setTimer >= max){
//         clearInterval(setTimer);
//     }
// }






























