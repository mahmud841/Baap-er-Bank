
const loginButton = document.getElementById("login-submit");

loginButton.addEventListener("click", function(event){
    console.log(event.target);
    const userEmail = document.getElementById("user-email").value;
    const userPassword = document.getElementById("user-password").value;

    if(userEmail == "khan@gmail.com" && userPassword == "mahmud") {
        window.location.href = "banking.html";
    }
    else{
        const errorText = document.getElementById("error-text");
        errorText.style.display = "block";
    }
})

/*
 document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check email and password
    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }
});
 */
