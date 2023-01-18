/*****************************
 * MANIPULATION DES CONTENUS *
 *****************************/

//3 façons de créer une fonction

// 1. créer une fonction 'l'
function l(e) {
console.log(e);
}

//2 - Identique, sauf que la fonction est stocké dans une variable 'l'
l = function l(e) {
    console.log(e);
    }


//3 - Identique, mais avec des fonction fléchés ECMA6
l = e => console.log(e);

//Je souhaite récupérer mon lien google
var google = document.getElementById('google');
l( google);

//Le Lien vers lequel pointe la balise
l(google.href);

// Id de la balise
l(google.id);

// Classe de la balise
l(google.className);

// Texte de la balise
l(google.textContent);

//Comment faire pour modifier le texte
google.textContent = 'Mon lien vers Google';

/***********************************
 * AJOUTER UN ÉLÉMENT DANS MA PAGE *
 ***********************************/
// Je crée un élement span
var span = document.createElement('span');

//Je lui donne un ID
span.id = 'monSpan';

// J'ajoute du contenu texte
span.textContent = 'Mon texte en js';

//Je place mon span à l'intérieur de la balise google
google.appendChild( span );

/* Modifier la mise en forme */
// document.body.style.backgroundColor = "red";

// Ajouter un attribut
var p = document.getElementById('p');
p.setAttribute('class','nomDeMaClass')

/************
 * EXERCICE *
 ************/

// - Créer une div 
// - lui donner une class
// - insérer le contenu : "Je suis crée en js"
// - donner lui une largeur de 200px et margin:auto
// - Et background de couleur
// - L'insérer dans le body

var maDiv = document.createElement('div');
maDiv.setAttribute('class', 'madiv');
maDiv.textContent = 'Je suis crée en js';
// maDiv.setAttribute('style', 'width:200px;margin:auto;display:block; background-color: #ffbdbd;');
maDiv.style.width = "200px";
maDiv.style.margin = "auto";
maDiv.style.backgroundColor = "#ffbdbd";
document.body.appendChild( maDiv );


/************
 * EXERCICE *
 ************/
// En partant du travail déjà réalisé sur la page.
// Créez directement dans la page une balise <h1></h1> ayant comme contenu : 
// "Titre de mon Article".
// Dans cette balise, vous créerez un lien vers une url de votre choix.
// BONUS : Ce lien sera de couleur Rouge et non souligné.

var h1 = document.createElement('h1'); // Création d'un élément h1
h1.textContent = 'Titre de mon Article ';

var a = document.createElement('a'); // Création d'un élément a
a.textContent = 'Journée pluvieuse :-(';
a.href='https://fr.wikipedia.org/wiki/La_Pluie';
a.target = "_blank";

a.style.color = 'red';
a.style.textDecoration = 'none';

h1.appendChild( a ); // On place la balise "a" dans la balise "h1"

document.body.appendChild( h1 ); //Puis la balise h1 dans la balise body


/* Exemple forEach()*/
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
var toutMesParagraphes = document.querySelectorAll('p');
console.log(toutMesParagraphes);

toutMesParagraphes.forEach(function(nom,index){
nom.textContent += '(paragraphe n°:' + index + ')';
})