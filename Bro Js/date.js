
// the Date object is used to work with dates and times

// let date = new Date(0);
// let date = new Date()
// let date = new Date(2023, 0, 1, 2, 3, 5)
// let date = new Date( "January 1,2024 00:00:00");
// date = date.toLocaleString();
// // console.log(date);
// document.getElementById('myLabel').innerHTML=date;

/*
let year = date.getFullYear();
let dayOfTheMonth = date.getDate();
let dayOfTheWeek = date.getDay();
let monthOfTheYear = date.getMonth();
let hourOfTheDay = date.getHours();
let minuteOfTheHour = date.getMinutes();
let secondOfTheMinute = date.getSeconds();
let milliSecondOfTheSecond = date.getMilliseconds();
*/

// date.setFullYear(2023);
// date.setDate(23);
// date.setHours(23);
// date.setMinutes(23);
// date.setSeconds(23);
// date.setMilliseconds(23);


// date = date.toLocaleString();
// document.getElementById('myLabel').innerHTML  = formatDate(date);
// document.getElementById('myLabel').innerHTML  = timeFormat(date);

// function formatDate(date){
//     let year = date.getFullYear()+7;
//     let month = date.getMonth();
//     let day = date.getDate();

//     return `${day}/${month}/${year}`;

// }

// function timeFormat(){
//     let hour = date.getHours();
//     let minute = date.getMinutes();
//     let second = date.getSeconds();
//     let amOrPm = hour >= 12 ? "pm" : "am";

//     return `${hour}:${minute}:${second} ${amOrPm}`;
// }


// time formatting in javascript

const myLabel = document.getElementById("myLabel");

update();
setInterval(update, 1000);

function update(){
    let date = new Date();
    myLabel.innerHTML = formatTime(date);

    function formatTime(date){
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        let amOrPm = hour >= 12 ? "pm" : "am";

        hour = (hour % 12) || 12;
        hour = formatZeroes(hour);
        minute = formatZeroes(minute);
        second = formatZeroes(second);


        return `${hour}:${minute}:${second} ${amOrPm}`;
    }

    function formatZeroes(time){
        time = time.toString();
        return time.length < 2 ? "0" +time : time;
    }
}



