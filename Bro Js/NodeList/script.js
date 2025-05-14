
let buttons = document.querySelectorAll(".myButtons");

console.log(buttons);

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
    });
});


buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(205, 81.20%, 39.60%)";
    });
});

const newButton = document.createElement("button");
newButton.textContent = "Button N";
newButton.classList = "myButtons";
document.body.appendChild(newButton);
