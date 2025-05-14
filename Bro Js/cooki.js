/* cookie = a small text file stored 
            our computer used to remember information 
            about the user saved name=value pairs

            I tried to understand cookie but it's fucking part
*/

// document.cookie = "firstName=SpongeBob; expires=Sun, 1 January 2030 12:00:00 UTC; path=/"; 
// console.log(document.cookie);

setCookie("email", "SpongeBob@gmail.com", 365);
console.log(document.cookie);
            
function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60));
    let expires = "expires" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path/`
}



