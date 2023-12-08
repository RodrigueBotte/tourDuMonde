identifiant.innerHTML = `<p><i class="fa-solid fa-check" style="color: #f6d5a2;"></i> Nom: ${localStorage.getItem("prenom")} ${localStorage.getItem("nom")}`;
email.innerHTML = `<p><i class="fa-solid fa-check" style="color: #f6d5a2;"></i> Par courriel: ${localStorage.getItem("email")}`;

tel.innerHTML = `<p><i class="fa-solid fa-check" style="color: #f6d5a2;"></i> Par téléphone: ${localStorage.getItem("tel")}`;