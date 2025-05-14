
//  asynchronous code = Out of sequence.

// console.log("Start");
// setTimeout(()=>console.log("This is asynchronous code"),3000);
// console.log("End");

// console.time("Response time");
// alert("Click The Ok Button");
// console.timeEnd("Response time")

// promise = 

// const promise = new Promise((resolve) => {
//     let fileLoaded = true;

//     if(fileLoaded){
//         resolve("File Loaded Successfully");
//     }
//     else{
//         resolve("File Not Loaded");
//     }
// });

// promise.then(value => console.log(value))
// .catch(error => console.log(error));


// const wait = timer => new Promise(resolve => {
//     setTimeout(resolve,timer);

// });

// wait(4000).then(() => console.log("Thanks for waiting"));

// await = makes an async function wait for a promise 

async function loadFile(){
    let fileLoaded = false;

    if(fileLoaded){
        return "File Loaded Successfully";
    }
    else{
        throw "File not loaded successfully";
    }
}

async function loadMessage(){

    try {
        let message = await loadFile();
        console.log(message);
    }
    catch(fuad){
        console.log(fuad);
    }
    
}

loadMessage();


















