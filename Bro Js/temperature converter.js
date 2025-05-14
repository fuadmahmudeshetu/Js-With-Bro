
document.getElementById("submitButton").onclick = function(){
    
    let temp;

    if (document.getElementById("cButton").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("tempLabel").innerHTML = temp + " degree celsius";
    }

    else if(document.getElementById("fButton").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("tempLabel").innerHTML = temp + " degree celsius";
    }

    else{
        document.getElementById("tempLabel").innerHTML ="please select a unit";
    }

}

function toCelsius() {
    return temp*9/5+32;
}

function toFahrenheit(){
    return (temp-32)*(5/9);
}

