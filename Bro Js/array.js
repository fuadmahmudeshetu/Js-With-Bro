// array = think of it as a variable
//         that can store multiple values

// let fruits = ["apple","mango","pean apple","Hikma Nesru"];

// fruits[3] = "Fuad Mahmud";

// fruits.push("Lemon");
// fruits.push("Fuad"); // add elements
// fruits.pop();  // remove last elements
// fruits.unshift("banana") // add elements on the first in put array
// fruits.shift();

// let index = fruits.indexOf("Hikma Nesru"); // get index of elements
// let length = fruits.length;  // to get the length of the array
// console.log(length);

// let prices = [5,10,15,20,25];

/*for(let i=0;i<prices.length;i++){
    console.log(prices[i]);
}*/

/*for(let i=prices.length-1;i>=0;i--){
    console.log(prices[i]);
}*/

/*for(let i of prices){
    console.log(i);
}
*/


// price = prices.sort(); // to sort array
// price = prices.sort().reverse();


// for(let price of prices){
//     console.log(price)
// }

let fruits =     ["mangoes","banana","apple"];
let vegetables = ["carrots","onions","potatoes"];
let meats =      ["egg","chicken","fish"];

let groceryList = [fruits, vegetables, meats];

// console.log(groceryList);

groceryList[0][0] = "fuad"; // to change elements

for(let list of groceryList){
    for(let lis of list){
        console.log(lis)
    }
}
