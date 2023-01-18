/********************
 * LA CONCATÉNATION *
 ********************/

var debutDePhrase = 'Aujourd\'hui ';
var dateDuJour = new Date();
var suiteDePhrase = ', sont présents : ';
var nbApprenants = 8;
var finDePhrase = ' apprenants.<br>';

/**
 * Nous souhaitons maintenant, grâce à la concaténation
 * afficher le tout en une phrase sur notre page !
 */

document.write(
    debutDePhrase + '0' + dateDuJour.getDate()
                  + '/'
                  + '0' + (dateDuJour.getMonth() + 1)
                  + '/'
                  + dateDuJour.getFullYear()
                  + suiteDePhrase
                  + nbApprenants
                  + finDePhrase
);

/**
 * Ici, notre variable dateDuJour nous donne accès
 * aux fonctions de l'objet date.
 * Grâce au point ' . ' je peux utiliser ces fonctions.
 */