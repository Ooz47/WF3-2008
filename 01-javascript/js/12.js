
/****************
 * EVENEMENTS : *
 ****************/
/*
 Les évènements vont me permettre de déclencher une
    fonction ; c'est à dire, une série d'instructions ;
    suite à une action de mon utilisateur.

    OBJECTIF : Être en mesure de capturer ces évènements
    afin d'executer une fonction.

Les Evenements : MOUSE ( Souris )

        click       : au clic sur un élément ;
        dblclick    : au double clic ;
        mouseenter  : la souris passe au dessus d'un élément ;
        mouseleave  : la souris sors de l'élément ;
        mouseover   : au passage de la souris ;

    Les Evenements : KEYBOARD ( Clavier )

        keydown     : une touche du clavier est enfoncée ;
        keyup       : une touche du clavier a été relachée ;

    Les Evenements : WINDOW ( Fenêtre )

        scroll      : défilement de la fenêtre ;
        resize      : redimentionnement de la fenêtre ;

    Les Evenements : FORM ( Formulaire )

        change      : pour les éléments <input>, <select> et <textarea> ;
        submit      : à l'envoi (soumission) du formulaire ;
        input       : pour capter la saisie d'un utilisateur sur le champ <input>
*/

var p = document.getElementById('monParagraphe');

function changerLaCouleurEnRouge(){
    p.style.color = "red";
}

function changerLaCouleurEnNoir(){
    p.style.color = "black";
}

//Ecouteur d'evenement
// p.addEventListener('mouseover', changerLaCouleurEnRouge);
p.addEventListener('click', changerLaCouleurEnRouge);
p.addEventListener('mouseleave', changerLaCouleurEnNoir);

/* 
- Sélectionner le bouton avec l'id "monBouton"
- ajouter une fonction alert() qui se déclenche au clic sur ce bouton
*/
var monBouton = document.getElementById('monBouton');
function declencheAlert() {
   alert('Alerte déclenchée');
}
monBouton.addEventListener('click', declencheAlert);

/** Exemple **/
//  A l'aide de javascript, créez un champ "input" type text avec 
//  un ID unique. Affichez ensuite dans une alerte, la saisie de  
//  l'utilisateur.  
var input = document.createElement('input');
input.id = 'monInput';
document.body.appendChild( input );

function afficherLaSaisie() {
    alert( input.value );
}

input.addEventListener('change', afficherLaSaisie);

// - Créer une div avec comme contenu: "Contenu js"
// - Déclencher une fonction qui modifie le contenu "contenu js modifié" de la div, au passage de la souris
// Bonus: Remettre le contenu textuel initial de la div, quand la souris ne survol plus l'élément

var maDiv = document.createElement('div');
maDiv.textContent = 'Contenu js';
document.body.appendChild( maDiv );

var contenuInitial = maDiv.textContent;

function modifieContenu() {
    maDiv.textContent = 'contenu js modifié';
 }

 function remetContenu() {
    maDiv.textContent = contenuInitial;
 }
 
 maDiv.addEventListener('mouseover', modifieContenu);
 maDiv.addEventListener('mouseleave', remetContenu);