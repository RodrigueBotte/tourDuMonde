let dateVoyage = localStorage.getItem("date");
let jour = localStorage.getItem("jour");
let laDate = new Date(dateVoyage).toLocaleDateString("fr");

console.log(laDate);

paramVoyage.innerHTML = `<p><i class="fa-solid fa-check" style="color: #f6d5a2;"></i> Pour ${jour} jours à partir du ${laDate}</p>`;


function changeColor(element) {
    element.style.color = ''; // Change la couleur au survol
  }
  
  function restoreColor(element) {
    element.style.color = ''; // Rétablit la couleur par défaut à la sortie du survol
  }
  
  function toggleActive(element) {
    element.classList.toggle('active'); // Ajoute ou retire la classe 'active' au clic
  }
  