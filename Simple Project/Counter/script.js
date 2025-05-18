
let numberCount = document.querySelector("#value");
const decreaseButton = document.querySelector(".decrease");
const resetButton = document.querySelector(".reset");
const increaseButton = document.querySelector(".increase");

let counter = 0;

decreaseButton.addEventListener("click", () => {
    let num = counter -= 1;
    numberCount.innerHTML = num;
});
increaseButton.addEventListener("click", () => {
    let num = counter += 1;
    numberCount.innerHTML = num;
});

resetButton.addEventListener("click", ()=>{
    counter = 0;
    numberCount.innerHTML = counter;
});