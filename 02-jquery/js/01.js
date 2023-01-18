// Installer jQuery ou utiliser le CDN
// jQuery est un ensemble de fonctions JavaScript simplifiées qui permettent une manipulation
//  plus fluide du DOM. Tout comme un fichier de script normal, jQuery doit
// être installé pour pouvoir fonctionner et 
// il faut le faire avant le script de la page Web si il fait appel à des fonctions jQuery.

// #Attendre le chargement du DOM
// A partir du moment, ou mon DOM, c'est dire
//     l'ensemble de l'arborescence de ma page HTML
//     est complètement chargé ; je peux commencer
//     à utiliser jQuery.

//     Je vais mettre l'ensemble de mon code dans une
//     fonction, qui sera appelée AUTOMATIQUEMENT ! Par
//     jQuery lorsque le DOM sera entièrement défini.

//Commande à exécuter dès la première ligne du .js
jQuery(document).ready(function(){

    alert('Le DOM est chargé');

});

alert("Le DOM n'est pas chargé");

// 2ème méthode (Rencontrée généralement)
$(document).ready(function(){


});

// 3ème méthode (Privilégiée)
$(function () {
    console.log('jQuery is ready to rock !');
});

// 4ème méthode (ES6 - Déconseillé)
$(() => {
    console.log('jQuery is ready to rock and roll !');
});