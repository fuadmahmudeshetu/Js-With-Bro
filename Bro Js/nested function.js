/*  nested function = Function inside other function
    outer function has access to inner function 
    inner function are hidden from out side of the outer function
    */

    let userName = "Abdu";
    let userInbox = 0;

    login();

    function login(){
        displayUserName();
        displayUserInbox();

        function displayUserName(){
            console.log(`Hello ${userName}`);
        }

        function displayUserInbox() {
            console.log(`You have ${userInbox} new message`);
        }
        
    }





