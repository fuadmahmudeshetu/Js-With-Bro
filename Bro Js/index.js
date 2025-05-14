
// console.log("It is really good");
// console.log("Pizza is my favorite food");

// document.write("My name is fuad mahmud ");

// this is single line comment

/*
this 
is 
multiple
line 
comment
*/

// linked with html file indx.html

// let firstName = "Abdulwehab";//strings
// console.log("Hello",firstName);
// let age = 21;
// age += 1;//numbers
// console.log("you are",age,"years old");
// let student = false;//booleans
// console.log("Enrolled",student);
// document.getElementById("p1").innerHTML = "Hello " + firstName;
// document.getElementById("p2").innerHTML = "You are " + age + "years old";
// document.getElementById("p3").innerHTML = "Enrolled " + student;




// arithmetic
// let students = 23;
// students = students - 3;
// students = students + 5;
// students = students * 23;
// students = students / 3;
// students = students % 3;
// let extraStudents;
// extraStudents = students % 4;
// console.log("Extra Students "+extraStudents);

//tip
// let result = (1+2)*(3+4);
// console.log(result);


// how to accept user input
//using prompt
// let userName = window.prompt("what is your name? ");
// console.log(userName);
let count = 0;
document.getElementById("decreaseBtn").onclick = function(){
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increaseBtn").onclick = function(){
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function(){
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}

