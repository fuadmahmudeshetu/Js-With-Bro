

const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["underwear",50]
   ]
);

let shoppingCart = 0;

shoppingCart += store.get("t-shirt");
shoppingCart += store.get("jeans");
shoppingCart += store.get("underwear");
console.log(shoppingCart);

// store.set("hat", 40);
// store.delete("hat");

console.log(store.has("hat"));
console.log(store.size);
console.log(store.has("underwear"));

store.forEach( (value , key) => console.log(`${key} $${value}`)); 


