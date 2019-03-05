/****************** Partie Amelie **********************/

function ouvreMG() {
document.getElementById("menuGauche").style.width = "350px";
document.getElementById("page_contenu").style.marginLeft ="350px";
document.getElementById("entete").style.marginLeft ="350px";
}

function fermeMG() {
document.getElementById("menuGauche").style.width = "0";
document.getElementById("page_contenu").style.marginLeft = "0";
document.getElementById("entete").style.marginLeft = "0";
}


$(document).ready(function() {
  $("#NMBouton").click(function() {
    $("#nouveauxMessages").show();
	$("#nouveauxMessages").css("visibility", "visible");
	$("#messagesEnvoyes").hide();
    $("#boiteReception").hide();
    $("#contact").hide();
  });
});

$(document).ready(function() {
  $("#BRBouton").click(function() {
    $("#nouveauxMessages").hide();
    $("#messagesEnvoyes").hide();
    $("#boiteReception").show();
    $("#contact").hide();
  });
});

$(document).ready(function() {
  $("#MEBouton").click(function() {
    $("#nouveauxMessages").hide();
    $("#messagesEnvoyes").show();
	$("#messagesEnvoyes").css("visibility", "visible");
    $("#boiteReception").hide();
    $("#contact").hide();
  });
});
$(document).ready(function() {
  $("#CBouton").click(function() {
    $("#nouveauxMessages").hide();
    $("#messagesEnvoyes").hide();
    $("#boiteReception").hide();
    $("#contacts").show();
	$("#contacts").css("visibility", "visible");
  });
});

 

 
 
/**************************** Partie Sarah *****************************/
function afficherAlbert(){
	document.getElementById("Nom").innerHTML="De:    Albert J.  ";
	document.getElementById("Sujet").innerHTML="Sujet: Retour de mon voyage ";
	document.getElementById("paragraphe").innerHTML=" Salut, je voulais te dire que je suis revenue de mon voyage. C'était un si beau voyage! On pourrait se voir pour que je te montre quelques photos. ";
	document.getElementById("signature").innerHTML=" -Albert ";

}

function afficherGinette(){
	document.getElementById("Nom").innerHTML="De: Ginette A. ";
	document.getElementById("Sujet").innerHTML="Sujet: De tes nouvelles. ";
	document.getElementById("paragraphe").innerHTML=" Allo, je voulais voir de tes nouvelles. J'espère que tu vas bien. Appelle moi svp. ";
	document.getElementById("signature").innerHTML=" -Ginette ";
}

function afficherBob(){
	document.getElementById("Nom").innerHTML="De: Bob E. ";
	document.getElementById("Sujet").innerHTML="Sujet: J'ai ton livre ";
	document.getElementById("paragraphe").innerHTML=" Hey, j'ai le livre dont tu as besoin pour ton cours d'informatique. Il est arrivé hier. Je te l'amène en cours demain. Bonne soirée! ";
	document.getElementById("signature").innerHTML=" -Bob ";
}

function afficherBen(){
	document.getElementById("Nom").innerHTML="De: Ben M. ";
	document.getElementById("Sujet").innerHTML="Sujet: Note de cours ";
	document.getElementById("paragraphe").innerHTML=" Hey, est-ce que tu pourrais m'envoyer les notes de cours de programmation? j'ai du m'absenter du cours hier... Merci !!  ";
	document.getElementById("signature").innerHTML=" -Ben ";
}

function afficherNora(){
	document.getElementById("Nom").innerHTML="De: Nora S.";
	document.getElementById("Sujet").innerHTML="Sujet: Party ";
	document.getElementById("paragraphe").innerHTML=" Salut, oublies pas le party de vendredi soir !! si tu as des questions appelle moi. ";
	document.getElementById("signature").innerHTML=" -Nora ";
}

var fenetre = document.getElementById('fenetreContact');
var btnAjout = document.getElementById("ajoutContact");
var x = document.getElementsByClassName("fermer")[0];

// Quand l'utilisateur clique sur +, la fenêtre s'ouvre
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
