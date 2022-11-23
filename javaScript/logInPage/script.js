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
})

// signingIn
const logInForm = document.querySelector("#logIn"); 
    
logInForm.addEventListener("submit", e =>   {
    e.preventDefault()

    // get username/password values
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    // store values in localStorage
         localStorage.setItem("username", username);
         localStorage.setItem("password", password);
         console.log("Credentials stored in localStorage");

     
})

const username = document.getElementById('username');
const password = document.getElementById('password');
const welcome = document.getElementById("welcome");
const formTask = document.getElementById("formTask");
const signOutBtn = document.getElementById("signOutBtn");


    const users = [ 
        {"username": "Janne", "password": "test"},
        {"username": "Joe", "password": "Doe"},
        {"username": "Sergey", "password": "Nazarov"},
        {"username": "Bob", "password": "Lazar"},
        {"username": "Mario", "password": "64"},    
    ];

loggingIn = () => { 
    const loggingIn = document.getElementById('formBtn');
        console.log('Checking credentials..');

    for (i = 0; i < users.length; i++) {
      if (username.value == users[i].username && password.value == users[i].password) {
        console.log(username.value + " logged in.")
        logInForm.classList.add("formHidden");
        formTask.classList.remove("formHidden");
        signOutBtn.classList.remove("formHidden");
        formTask.innerHTML = "Welcome, " + username.value;
        return true;
      }
    }
    // if not -> display error message
    invalid.classList.remove("formHidden");
    console.log("Invalid credentials");
}

// fetch values from localStorage, "autologin"
checkCredentials = () => {
    for (i = 0; i < users.length; i++) {
    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");
        const checkCredentials = document.querySelector("checking");
        if (storedUsername == users[i].username && storedPassword == users[i].password) {
        console.log("Welcome back, " + storedUsername);
        logInForm.classList.add("formHidden");
        formTask.classList.remove("formHidden");
        signOutBtn.classList.remove("formHidden");
        formTask.innerHTML = "Welcome, " + storedUsername;
        return true;
        }

    //clear cache when signing out
     document.getElementById("signOutBtn").addEventListener("click" , () => {
        localStorage.clear();
        console.log("Cleared localStorage");
    })
    //push newly created accounts into array
    
  }
}
