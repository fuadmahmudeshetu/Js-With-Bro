/*  class = a blue print for creating objects 
            define what properties and methods they have
            use a constructor for unique properties */


/* class player{

    score = 0;

    pause(){
        console.log("You paused the game");
    }

    exit(){
        console.log("You exited the game");
    }
}            

const player1 = new player();

player1.score += 3;
console.log(player1.score);
player1.pause();
*/

/*

// constructors = a special method of a class'
//                accepts arguments and assigns properties

class student {
    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    score(){
        console.log(`${this.name} score ${this.gpa}`);
    }

}

const fuad = new student("Fuad", 26, 3.4);
const aymen = new student("Aymen", 24, 3.6);
const abdu = new student("Abdu", 27, 3.8);

console.log(fuad.name);
console.log(fuad.age);
console.log(fuad.gpa);
console.log(fuad.score());

console.log(abdu.name);
console.log(abdu.age);
console.log(abdu.gpa);
console.log(abdu.score());

console.log(aymen.name);
console.log(aymen.age);
console.log(aymen.gpa);
console.log(aymen.score());

*/


/* static key word = belongs to the class, not the objects
                    properties: useful for caches, fixed-configuration
                    method:    useful for utility functions 
                    */
/*
class Car{

   static numberOfCars = 0;

    constructor(model){
        this.model=model;
        Car.numberOfCars +=1;
    }

    static startRace(){
        console.log("3...2...1...GO!");
    }
}

const car1 = new Car("ferrari");
const car2 = new Car("Mustang");
const car3 = new Car("BMW");
const car4 = new Car("BMW");
const car5 = new Car("BMW");
const car6 = new Car("BMW");
const car7 = new Car("BMW");
const car8 = new Car("BMW");

console.log(Car.numberOfCars);
console.log(Car.startRace());
*/


/* Inheritance == a child class can inherit all the
                  the methods and properties of the parent class*/

/*

class Animal{
    alive = true;

    eat() {
        console.log(`${this.name} is eating`);
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}


class Rabbit extends Animal{
    name  = "rabbit"

    run(){
        console.log(`${this.name} is running`);
    }
}
class Fish extends Animal{
    name  = "fish"

    swim(){
        console.log(`${this.name} is swimming`);
    }
}
class Hok extends Animal{
    name  = "hok"

    fly(){
        console.log(`${this.name} is flying`);
    }
}

const rabbit1 = new Rabbit();
const fish = new Fish();

console.log(rabbit1.alive);
console.log(rabbit1.name);
console.log(rabbit1.eat());

console.log(fish.alive);
console.log(fish.name);
fish.sleep();
fish.eat();
*/

/* Super == refers to the parent class commonly used to invoke 
            constructor of a parent class*/

// class Animal {
//     constructor(name,age){
//         this.age = age;
//         this.name = name;
//     }
// }

// class Rabbit extends Animal {

//     constructor(name,age,runSpeed){
//         super(name, age);
//         this.runSpeed=runSpeed;
//     }

// }

// class Fish extends Animal{

//     constructor(name, age, swimSpeed) {
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }
// }

// class Hawk extends Animal {

//     constructor(name, age, flySpeed) {
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }
// }

// const rabbit = new Rabbit("Rabbit", 3, 40);
// const fish = new Fish("Fish", 3, 60);
// const hawk = new Hawk("Hawk", 3, 90);

// console.log(fish.name);
// console.log(fish.age);
// console.log(fish.swimSpeed);

//get == binds an object property to a function when that property is accessed

// class Car{
//     constructor(power){
//         this._gas= 25;
//         this._power= power;
//     }
//     get power(){
//         return `${this._power}hp`;
//     }

//     get gas(){
//         return `${this._gas}L (${this._gas/50*100}%)`;
//     }
//     set gas(value){
//         if(value>50){
//             value = 50;
//         }
//         else if(value < 0){
//             value = 0;
//         }
//         this._gas = value;
//     }
// }

// let car = new Car(400);

// car.gas = 10000000000;
// console.log(car.power);
// console.log(car.gas);



