/****************************
 * LES SELECTEURS DE JQUERY *
 ****************************/

// -- Format: $('selecteur')
// -- Tous les sélecteurs CSS sont disponible
// https://jquery.com/

$(function () { // DOM is ready !
    console.log('jQuery is ready to rock !');

    document.querySelectorAll('span');
    document.getElementsByTagName('span');
    $('span'); // Version jQuery
    $('.produits span img'); 

    document.getElementById('monElementId');
    document.querySelector('#monElementId');
    $('#monElementId');
   
    document.getElementsByClassName('maClasse');
    var maClasse=$('.maClasse');


    var maClassepajquery =  $('.maClasse p a');
    
    console.log(maClassepajquery);

    //sélection via attributs de balise
    $('[href]') ;
    $('[href="https://google.fr"]') ;

    console.log(maClasse);


});

/*********
 * EXO 1 *
 *********/
// selectionner le 3ieme paragraphe, de la div maClasse
// et l'afficher dans le log

$(function() { 
    var p3 = $('.maClasse p:last-child');
    console.log(p3);

});




$(function() { 
// selecteurs propre à Jquery
// https://api.jquery.com/category/selectors/
// https://learn.jquery.com/using-jquery-core/selecting-elements/
// Les sélecteurs propres à jQuery permettent une
// sélection encore plus précise des éléments du DOM
// Le sélecteur jQuery :first correspond au
// sélecteur CSS :first-of-type
// Les fonctions .find(), .children(), .parent(),
// .prev() et .next() peuvent prendre en argument
// d’autres balises
console.clear();
var premiereImgDeMonElementId = $("#monElementId img:first");
// console.log(premiereImgDeMonElementId);

var findmonElementIdImg = $("#monElementId").find("img");
//var findmonElementIdImg = $("#monElementId").find("img:first");
// console.log(findmonElementIdImg);

var enfantDeMonElementId = $("#monElementId").children();
// console.log(enfantDeMonElementId);

var parentDeMonElementId = $("#monElementId").parent();
// console.log(parentDeMonElementId);

var avantMonElementId = $("#monElementId").prev();
// console.log(avantMonElementId);

var apresMonElementId = $("#monElementId").next();
// console.log(apresMonElementId);




// selectionner plusieurs éléments en les séparant par des virgules
$( "div.maClasse, #monElementId" );
// console.log($( "div.maClasse, #monElementId" ));

// Sélecteur d’élément par index
// La fonction .eq() permet de sélectionner la
// balise selon son ordre d’apparition dans le DOM
// en commencant par zéro
//Sélecteur eq()
var premierImg= $("div").eq(0);
var secondImg = $("div").eq(1);

// console.log(secondImg);



// console.clear();
// Selectionner le span du premier paragraphe, utiliser le plus de stratégie possible

var spanPremierParagraphe = $("p:first span");
var spanPremierParagraphe = $("p").eq(0).find("span");
var spanPremierParagraphe = $("p").eq(0).children().eq(1);
console.log(spanPremierParagraphe);


// Selectionner le span du 2ieme paragraphe de la div ayant la classe recherche
var spanDeuxiemeParagraphe = $(".recherche p").eq(1).find("span");
var spanDeuxiemeParagraphe = $(".recherche").find("span");
console.log(spanDeuxiemeParagraphe);
});