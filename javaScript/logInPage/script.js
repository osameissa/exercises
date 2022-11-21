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