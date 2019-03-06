var fenetre = document.getElementById('fenetreContact');
var btnAjout = document.getElementById("ajoutContact");
var x = document.getElementsByClassName("fermer")[0];

// Quand l'utilisateur clique sur le bouton d'ajout, la fenêtre s'ouvre
btnAjout.onclick = function() {
  fenetre.style.display = "block";
}

// Quand l'utilisateur clique sur x, la fenêtre se ferme
x.onclick = function() {
  fenetre.style.display = "none";
}

// Quand l'utilisateur clique n'importe où à l'extérieur de la fenêtre, la fenêtre se ferme
window.onclick = function(event) {
  if (event.target == fenetre) {
    fenetre.style.display = "none";
  }
}