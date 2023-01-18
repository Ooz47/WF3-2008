/*************************************************
 * #MODIFIER OU AFFICHER LE CONTENU D’UNE BALISE *
 *************************************************/
// Une fois sélectionné en jQuery, 
// il est possible d’éditer le contenu d’une balise HTML avec les fonctions text() et html(). 

// Afficher
// Afficher le contenu avec text()
var monTexte = $('div').text();
// console.log(monTexte); //Les balises internes seront ignorées

// Afficher le contenu avec html()
var monTexteHtml = $('div').html();
// console.log(monTexteHtml);

// Modifier
// Ex:
// $('h1').text('Un nouveau titre');
// $('div').html('Un texte <strong>gras</strong>');

/**********************************
 * #AJOUTER OU RETIRER UNE BALISE *
 **********************************/

var div = $('.maClass');
// $(div).append("<p>Lorem Ipsum</p>");
// $(div).prepend("<p>Lorem Ipsum</p>");
// $(div).remove();

/*********************
 * CLONER UNE BALISE *
 *********************/
var divclone = $(div).clone();
// console.log(divclone);
// $(div).append(divclone);

/********************
 * CREER UN ÉLÉMENT *
 ********************/
var txt1 = "<div>Mon texte</div>";               // Créer en HTML
var txt2 = $("<div></div>").text("Mon texte"); // Créer avec jQuery
// console.log(txt2);
var txt3 = document.createElement("div");  // Créer avec DOM
txt3.textContent = "Mon texte";

// $("body").append(txt1, txt2, txt3);

/***********
 * EXO : *
 ***********/
// - Sélectionner le 2ième paragraphe de la div avec class "maClass"
// - Afficher sont contenu en html dans log
// - Modifier son contenu, "Je sais modifier un paragraphe en jquery"
// - Créer un élément , contenant "Et je sais en créer un !", et l'ajouter en tant que premier paragraphe de 
// la div ".maClass"

$(function() {
    // p =  $(".maClass p"); //Sélectionne tous les paragraphes enfants de la div ".maClass"
    var p =  $(".maClass p").eq(1); 
    var p =  $(".maClass p:nth-child(2)");
    console.log(p);

    // p.html('Je sais modifier un paragraphe en Jquery');

     var paragraphe = $("<p></p>").html("Et je sais en créer un !");
     $(".maClass").prepend(paragraphe);

     //exemple pour rajouter un élément après un autre
     var span = "<span>Mon span apres le strong</span>";
     $("strong").after(span);
});