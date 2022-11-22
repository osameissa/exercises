//linkLogIn -> signUpForm
//linkSignUp -> logInForm

document.addEventListener("DOMContentLoaded", () => {
    const logInForm = document.querySelector("#logIn");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        logInForm.classList.add("formHidden");
        createAccountForm.classList.remove("formHidden");   
    });

    document.querySelector("#linkLogIn").addEventListener("click", e => {
        e.preventDefault();
        logInForm.classList.remove("formHidden");
        createAccountForm.classList.add("formHidden");
    });
});

// signingIn
const logInForm = document.querySelector("#logIn"); 
    
logInForm.addEventListener("submit", e =>   {
    e.preventDefault()
    // get username/password values
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    // store values in localStorage
    localStorage.setItem("#username", username);
    localStorage.setItem("#password", password);
    console.log("Credentials stored in localStorage");

    // fetch values from localStorage
    

})

const username = document.getElementById('username');
const password = document.getElementById('password');
const welcome = document.getElementById("welcome");
const formTask = document.getElementById("formTask");
const task = document.getElementById("task");


const users = [ 
    {"username": "janne", "password": "test"},
    {"username": "joe", "password": "biden"},
    {"username": "donald", "password": "trump"},
 ];

loggingIn = () => { 
const loggingIn = document.getElementById('formBtn');
    console.log('Checking credentials..');

    for (i = 0; i < users.length; i++) {
      if (username.value == users[i].username && password.value == users[i].password) {
        logInForm.classList.add("formHidden");
        formTask.classList.remove("formHidden");
        task.classList.remove("formHidden");
        formTask.innerHTML = "Welcome, " + username.value;
        return true;
        
      }
    }
    invalid.classList.remove("formHidden");

}
