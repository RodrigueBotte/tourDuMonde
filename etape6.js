let nom = document.querySelector("#nom");
let prenom = document.querySelector("#prenom");
let email = document.querySelector("#email");
let form = document.querySelector("#form");
let tel = document.querySelector("#telephone")

form.addEventListener("submit", date);
function date() {
    localStorage.setItem("nom", nom.value);
    localStorage.setItem("prenom", prenom.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("tel", telephone.value);

}

