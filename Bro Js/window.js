
// console.dir(window);
// console.log(window.innerWidth);
// console.log(window.innerHeight);

// console.log(window.scrollX);
// console.log(window.scrollY);

// console.log(window.location.href);
// window.location.href = "https://google.com";

// console.log(window.location.hostname);
// console.log(window.location.pathname);

const myButton = document.querySelector("#myButton");
myButton.addEventListener("click", () => window.location.href = "https://YouTube.com");

const Button = document.querySelector("#Button");
Button.addEventListener("click", () => window.print());

let age = window.prompt("Please enter your age");

if( age < 18){
    window.alert("You are not eligible to participate in this fucking vote!");
    window.close();12
}
else {
    alert("You can vote your choice");
    confirm("Are You Sure Your Choice Is Correct!");
}

