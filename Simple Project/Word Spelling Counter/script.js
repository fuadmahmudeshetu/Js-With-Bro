
const inputWord = document.getElementById("inputWord");
const submitButton = document.getElementById("count");
const resultSet = document.getElementById("result");

let arr = "";

submitButton.addEventListener('click',()=>{
    let getValue = inputWord.value;
    let wordArray = getValue.split("");
    resultSet.innerText = wordArray.length;
});

// It counts the space as spelling example if the user inputs "Fuad Mahmud" the Number of spelling will be 11