let firstName = document.querySelector("#firstName");
    let lastName = document.querySelector("#lastName");
    let email = document.querySelector("#email");
    let dateBirth = document.querySelector("#dateBirth");
    let password = document.querySelector("#password");
    let confirmPassword = document.querySelector("#confirmPassword");
let inscriptionForm = document.querySelector("#inscriptionForm");
console.log("hello");
inscriptionForm.addEventListener("submit", validateForm);

    
function validateForm(e) {
    e.preventDefault();
    console.log(password.value);
    if (password.value != confirmPassword.value) {
        alert("Les mots de passe ne correspondent pas.");
    }
    else {
        localStorage.setItem("email", email.value);
        localStorage.setItem("mdp", password.value);

        window.location.href='./connexion.html'
    }
    
    
    console.log(firstName.value);
}

