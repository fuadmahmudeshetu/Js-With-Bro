
// let x,y =12,z = 56,maximum,minimum;

// x = Math.floor(x);
// x = Math.round(x);
// x = Math.abs(x);
// x = Math.ceil(x);
// x = Math.pow(x,2);
// maximum = Math.max(x,y,z);
// minimum = Math.min(x,y,z);

// x = Math.E;
// console.log(x);


// pythagoras theorem
let a,b,c;

// a = window.prompt("Enter the side value of a ");
// a = Number(a);

// b = window.prompt("Enter the side value of b ");
// b = Number(b);

// c = Math.sqrt(a*a + b*b);
// console.log("Side c is equal to "+c);

 document.getElementById("submitButton").onclick= function() {
    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(a*a + b*b);
    document.getElementById("cLabel").innerHTML = "Side C : " + c;

}
