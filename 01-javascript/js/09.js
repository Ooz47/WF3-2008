/***************
 * LES BOUCLES *
 ***************/

/*Pour i = 0, Tant que i est inférieur ou égale à 10, j'incrémente i de 1 */
for(var i = 0; i <= 10; i++){
    document.write('instruction executée: ' + i + '<br>');
}

document.write('<hr>');


/* Tant que j est inférieur à 10, j'exécute ma boucle */
var j = 0;
while(j <= 10){
    document.write('instruction executée: ' + j + '<br>');
    j++;
}
document.write('<hr>');

/************
 * EXERCICE *
 ************/
const Prenoms = ['Jean', 'Marc', 'Matthieu', 'Paul', 'Luc', 'Hugo', 'Jacques'];

/**
 * CONSIGNE : Grâce à une boucle FOR ou autre..., affichez la liste des prénoms
 * du tableau ci-dessus dans la console, ou sur votre page.
 */
 // Manuellement dans la console
 console.log( Prenoms[0] );
 console.log( Prenoms[1] );
 console.log( Prenoms[2] );
 console.log( Prenoms[3] );
 console.log( Prenoms[4] );
 console.log( Prenoms[5] );
 console.log( Prenoms[6] );
 console.log('-------');

// Automatique avec une boucle
for ( var index = 0 ; index <= 6 ; index++ ) {
    console.log( Prenoms[ index ] );
}

// Variante, calcul automatique de la dimension du tableau
console.log('----------');

for( var index = 0; index < Prenoms.length; index++){
    console.log( Prenoms[index]);
}


/***********************
 * EXERCICE : ADDITION *
 ***********************/
// Créer un tableau qui contient les valeurs suivantes : 
// 1, 2, 3, 4, 5, 6, 7, 8, 9
// Faire une boucle qui permet d'additionner le total des chiffres.
// Afficher dans un console.log le total.

var nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var resultat = 0;

for ( var i = 0 ; i < nombres.length ; i++ ) {
    // On sait que i prendra successivement les valeurs de 0...10
    // Comment additionner les valeurs ?
    resultat =  resultat + nombres[ i ] ;
    //Ecriture simplifiée
    // resultat += nombres[i];
    console.log( resultat );
}

/************
 * EXERCICE *
 ************/
// - Créez un tableau qui contient 3 noms et prénoms d'acteurs
// - Pour chaque acteur, affichez dans la console, en utilisant une boucle par exemple: 
// "Le numéro 1 est Stalone" 

//Bonus: A l'aide d'un deuxième tableau, afficher dans la console:
// "Le premier est Stalone, "Le deuxième est ...", etc

console.clear();
var acteurs = ['Eddy Murphy', 'Idriss Elba', 'Jackie Chan'];
var quantieme = ['Premier', 'Deuxième', 'Troisième'];

for ( var i = 0 ; i < acteurs.length ; i++ ) {

    // console.log( 'i = ' + i );
    // console.log( acteurs[ i ] );

    // console.log( 'Le numéro ' + parseInt(i+1) + ' est ' + acteurs[i] );
    console.log( 'Le ' + quantieme[i] + ' est ' + acteurs[i] );
    console.log('---');
}