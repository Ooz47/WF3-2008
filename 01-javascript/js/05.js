/************************************
 * INCREMENTATION ET DECREMENTATION *
 ************************************/

/* INCREMENTATION */
var nb1 = 1;
nb1 = nb1 + 1;
// Ecriture simplifiée
// La même chose que nb1 = nb1 + 1; Incrémentation par pas de 1
nb1++;

// console.log( nb1 );

var nb1 = 1;
nb1 = nb1 + 2;
//Ecriture simplifiée
nb1 +=2; //J'ajoute +2 à nb1, identique  à nb1 = nb1 + 2;
nb1 +=5; //J'ajoute +5 à nb1, identique  à nb1 = nb1 + 5;


//DECREMENTATION
console.log(nb1);
nb1 = nb1 - 1;
//Ecriture simplifiée
nb1--;
console.log(nb1);

// ou encore

nb1 = nb1 - 2;
//Ecriture simplifiée
nb1 -=2;
nb1 -=5;


//Subtilité

nb1 = 0;
nb1++; //nb1 = nb1 + 1;
console.clear();
console.log(nb1);

nb1 = 0;
console.log(nb1++); //Affiche 0, javascript affiche la valeur de nb1 avant de faire l'incrémentation
console.log(nb1);