// Selectors
const username = document.getElementById('username');
const password = document.getElementById('password');
const welcome = document.getElementById("welcome");
const signOutBtn = document.getElementById("signOutBtn");
const logInForm = document.querySelector("#logIn");

// [username,password]
const users = [ 
{"username": "Janne", "password": "test"},
{"username": "Joe", "password": "Doe"},
{"username": "Sergey", "password": "Nazarov"},
{"username": "Bob", "password": "Lazar"},
{"username": "Mario", "password": "64"}];

// Event-listeners
// Switching between logInForm & createAccountForm
document.addEventListener("DOMContentLoaded", () => {
    const logInForm = document.querySelector("#logIn");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        logInForm.classList.add("formHidden");
        createAccountForm.classList.remove("formHidden");});

        document.querySelector("#linkLogIn").addEventListener("click", e => {
            e.preventDefault();
            logInForm.classList.remove("formHidden");
            createAccountForm.classList.add("formHidden"
        )
    }
)
    
// Clear localStorage when clicking on signOutBtn
            document.getElementById("signOutBtn").addEventListener("click" , () => {
                localStorage.clear();
                console.log("Cleared localStorage");
            }
        )
    }
)

// Store username, password in localStorage
logInForm.addEventListener("submit", e =>   {
    e.preventDefault()
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    console.log("Credentials stored in localStorage");
    }
)

// Functions
loggingIn = () => { 
    const loggingIn = document.getElementById('formBtn');
    console.log('Checking credentials..');

    for (i = 0; i < users.length; i++) {
        if (username.value == users[i].username && password.value == users[i].password) {
            console.log(username.value + " logged in.")
            logInForm.classList.add("formHidden");
            formTask.classList.remove("formHidden");
            signOutBtn.classList.remove("formHidden");
            signOutBtn.innerHTML = '<i class="fa-solid fa-arrow-right-from-bracket"></i>';
            formTask.innerHTML = "Welcome, " + username.value;
            return true;
        }
    }

// If invalid credentials -> display error message
    invalid.classList.remove("formHidden");
    console.log("Invalid credentials");
}

// Autologin: fetch values from localStorage & cross-check
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
            signOutBtn.innerHTML = '<i class="fa-solid fa-arrow-right-from-bracket"></i>';
            formTask.innerHTML = "Welcome, " + storedUsername;
            return true;
        }
    }
}