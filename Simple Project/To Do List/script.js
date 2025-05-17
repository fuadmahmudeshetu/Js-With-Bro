
//let cart = ["Fuad", "Aymen", "Abdu", "Nasir"];
// for (let index = 0; index < cart.length; index++) {
//     const element = cart[index];
//     console.log(element);
// }
/*
for (const element of cart) {
    console.log(element);
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  console.log(matrix[2][1])



let arr = [1, 2, 3];

console.log(arr); // 1,2,3
console.log(String(arr) === '1,2,3'); 

console.log([] + 1); // "1"
console.log([1] + 1); // "11"
console.log([1, 2] + 1);
*/

let cart = [];

const inputElement = document.getElementById("inputText");
const insertButton = document.getElementById("addButton");

insertButton.addEventListener("click", ()=>{
    const element = inputElement.value;
    cart.push(element);
    console.log(cart);
});
