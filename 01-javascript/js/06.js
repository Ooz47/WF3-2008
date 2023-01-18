/*****************
 * LES FONCTIONS *
 *****************/

// Déclarer une fonction
//Les instructions ne seront executées que lorsque ma fonction sera appelée.

function bonjour() {
    // instruction js
    // instruction js
    return('bonjour');
    // instruction js
}

/* Ici j'execute ma fonction, 
et je déclenche ses instructions */

var resultat = bonjour();
console.log(resultat);


/* Ici la fonction 'ditBonjour' définie 2 arguments.
Au moment d'exécuter la fonction, nous affectons une valeur à chaque arguments.
Ainsi, prenom sera égale 'yannick', et nom sera égal à 'abaul'
*/


//  var prenom1 = 'Julien';

function ditBonjour(prenom, nom) {
    console.log(prenom + ' ' + nom);
    
    document.write(
        'Bonjour <strong>'
         + prenom
         + ' '
         + nom
         + '</strong> ! <br>'
    );
}
// console.log(prenom1);
ditBonjour('yannick','abaul');
ditBonjour('Lionel','Messi');

/************
 * EXERCICE *
 ************/
// Créez une fonction permettant d'effectuer l'addition de deux nombres (nb1 et nb2).

function pomme(nb1,nb2) {
    //return: ce qui est retourné par la fonction lors de son exécution.
    console.log(nb1);
    return nb1 + nb2;
    
}

var resultatDeMaFonction = pomme(50,5);
console.log(
    'Il y a ' 
    + resultatDeMaFonction
    + ' pommes dans mon jardin !');

/************
 * EXERCICE *
 ************/
// Créez une fonction permettant d'effectuer la conversion d'un montant en EURO en DOLLARS
//taux de conversion = 1.1035;

//tauxConversionUsd a une valeur par défaut, si aucune valeur n'est fournie lors de l'appel de la fonction,
// la valeur par défaut sera utilisée
function convertEurToUsd(montantEuro, tauxConversionUsd = 1.1035) {
    return montantEuro * tauxConversionUsd;
}
var montantEur = 10;

//pas de valeur fournie pour tauxConversionUsd
var montantUsd = convertEurToUsd(montantEur);

//une valeur fournie pour tauxConversionUsd
var montantUsd = convertEurToUsd(montantEur, 1.032);

console.log(montantUsd);
console.log(
    montantEur
        + ' € en dollars donne :'
        + montantUsd
        + '$'
    );

/************
 * EXERCICE *
 ************/
// Créez une fonction permettant d'effectuer le calcul de la TVA d'un montant HT.
// Sachant que le taux de la TVA peut varier : 5.5, 8.5, 10, 20
// La fonction doit renvoyer le montant TTC.

function calculTva( montantHt, tauxTva = 8.5) {
    return montantHt + (montantHt * (tauxTva / 100));
}

var montantTtc1 = calculTva(10);
var montantTtc2 = calculTva(10,5.5);
var montantTtc3 = calculTva(10,20);

console.clear();
console.log(montantTtc1);
console.log(montantTtc2);
console.log(montantTtc3);