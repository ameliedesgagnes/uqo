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

// $(document).ready(function() {
//   $("#nouveauMessageBouton").click(function() {
//     $("#nouveauxMessages").show();
//     $("#messagesEnvoyes").hide();
//     $("#boiteReception").hide();
//     $("#contact").hide();
//   });
// });

// function ouvreSectionNM() {
// document.getElementById("nouveauxMessages").style.width = 100%;
// document.getElementById("messagesEnvoyes").style.width = "0";
// document.getElementById("boiteReception").style.width = "0";
// document.getElementById("contact").style.width = "0";
// }
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
	document.getElementById("paragraphe").innerHTML=" Allo, je voulais voir de tes nouvelles. J'esp�re que tu vas bien. Appelle moi svp. ";
	document.getElementById("signature").innerHTML=" -Ginette ";
}

function afficherBob(){
	document.getElementById("Nom").innerHTML="De: Bob E. ";
	document.getElementById("Sujet").innerHTML="Sujet: J'ai ton livre ";
	document.getElementById("paragraphe").innerHTML=" Hey, j'ai le livre dont tu as besoin pour ton cours d'informatique. Il est arriv� hier. Je te l'am�ne en cours demain. Bonne soir�e! ";
	document.getElementById("signature").innerHTML=" -Bob ";
}

function afficherBen(){
	document.getElementById("Nom").innerHTML="De: Ben M. ";
	document.getElementById("Sujet").innerHTML="Sujet: Note de cours ";
	document.getElementById("paragraphe").innerHTML=" Hey, est-ce que tu pourrais m'envoyer les notes de cours de programmation? j'ai du m'absenter du cours hier... Merci !!  ";
	document.getElementById("signature").innerHTML=" -Ben ";
}

function afficherNora(){
	document.getElementById("Nom").innerHTML="Nora S.";
	document.getElementById("Sujet").innerHTML="Party ";
	document.getElementById("paragraphe").innerHTML=" Salut, oublies pas le party de vendredi soir !! si tu as des questions appelle moi. ";
	document.getElementById("signature").innerHTML=" -Nora ";
}
