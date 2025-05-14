

document.getElementById("submitButton").onclick = function(){

    const checkBox = document.getElementById("checkBox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    if(checkBox.checked){
        console.log("You sre subscribed");
    }
    else{
        console.log("You are not subscribed");
    }

    if(visaBtn.checked){
     document.getElementById("method") .innerHTML = "You are paying with visa";
    }
    else if(mastercardBtn.checked){
     document.getElementById("method").innerHTML = "You are paying with master card";    
    }
    else if(paypalBtn.checked){
        document.getElementById("method").innerHTML = "You are paying with pay pal";
    }

    else{
        document.getElementById("method").innerHTML = "Please select the payment method";
    }

}