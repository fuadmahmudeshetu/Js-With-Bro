
document.getElementById("submitButton").onclick = function(){
    checking = document.getElementById("checkbox");
    
    if(checking.checked){
        console.log("Welcome you are subscribed");
    }
    else{
        console.log("You are not subscribed!")
    }
}


document.getElementById("submitButton").onclick = function(){

    if (document.getElementById("mastercardBtn").checked){
        console.log("You are paying with master card card!");
    }
    else if(document.getElementById("visaBtn").checked){
        console.log("You are paying with visa card!");
    }
    else if (document.getElementById("paypalBtn").checked){
        console.log("You are paying with pay pal!");
    }
    else{
        console.log("You didn't select the card to pay the bill");
    }
    
}


