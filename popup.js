let valider = document.querySelector("#valider");
let dateVoyage = document.querySelector("#date");
let jourVoyage = document.querySelector("#jour");

function popup() {
    valider.style.display = "block";
}

function date() {
    localStorage.setItem("jour", jourVoyage.value);
    localStorage.setItem("date", dateVoyage.value);
}

    

