let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#form");
form.addEventListener("submit", validateForm);
console.log(localStorage.getItem("email"));
    
function validateForm(e) {
    e.preventDefault();
    console.log(email.value);
    console.log(localStorage.getItem("email"));

    if (email.value != localStorage.getItem("email")) {
        alert("Le mail ne correspond pas.");
    }
    else if(password.value != localStorage.getItem("mdp")) {
        alert ( "le mot de passe ne correspond pas")
    }
    else {
    window.location.href='./profil.html'
    }
}