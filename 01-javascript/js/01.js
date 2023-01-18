
//Commentaire sur une ligne
/*
Je peux mettre mon commentaire ici
 sur plusieurs lignes

 RACCOURCI
    - CTRL + :
    - SHIFT + ALT + A
*/

// -- 1 : Déclarer une variable
var prenom;

// -- 2 : Affecter une valeur à la variable
prenom = "Yannick";

// -- 3 : Pour afficher la valeur de ma variable dans la console
console.log(prenom);

// console.log( Prenom ); Uncaught ReferenceError: Prenom is not defined. Car javascript est sensible à la casse. Pas d'accent dans les noms de variables.


/**************************
 * LES TYPES DE VARIABLES *
 **************************/

// -- typeof me permet de connaitre le type de la valeur de ma variable.
console.log(typeof prenom);

// -- Déclaration et affectation d'un nombre
var age = 40;

// -- Connaitre son type
console.log(age);
console.log(typeof age);

// Les Booléens (Vraie / Faux)
var unBooleen = false; // ou true
console.log(unBooleen);
console.log(typeof unBooleen);


// -- Les constantes

/*
La déclaration "const" me permet de créer une constante accessible UNIQUEMENT en lecture.
Sa valeur ne pourra pas être modifiée par des réaffectations ultérieurs.
*/
var age = 43;
console.log(age);


const host = "localhost";
const user = "root";
const password = "mysql";

//Je ne peux pas faire cela
// user = "yannick";
//Uncaught TypeError: Assignment to constant variable.



console.clear();
var unNombre = '24';
console.log(unNombre);
console.log(typeof unNombre); // Petite subtilité, "unNombre" est ici de type "string" à cause des quotes au moment de l'affectation.

// Convertir un nombre (Integer, ou Int)
unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// - Pour convertir un nombre à virgule (Float)
unNombre = '12.55';
unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// -- Pour convertir un nombre entier ou float en string
unNombre = 10;
var unstring = unNombre.toString();
console.log(unstring);
console.log(typeof unstring);



/***************************
 * LA PORTÉE DES VARIABLES *
 ***************************/

/* Les variables déclarées directement à la racine du fichier JS sont variables GLOBALES
Elles sont disponibles dans l'ensemble de votre document, y compris dans les fonctions

Les variables déclarées à l'interieur d'une fonction sont appelées : variables LOCALES.
Elles sont disponibles uniquement dans le scope de la fonction. */



// VAR ET LET
// var → agit plus comme une variable globale
// let → agit plus comme variable locale


// console.clear();
let letVariableLet = "globale"; // on déclare et affecte les valeurs
var VarVariableVar = "globale";

if(true) {  //ma condition est vraie
let letVariableLet = "locale";  // on redéclare les variables dans notre condition affecte une autre valeur
var VarVariableVar = "locale";

console.log("let : " + letVariableLet ); //locale
console.log("var: " + VarVariableVar ); //locale
}

console.log("let : " + letVariableLet ); //globale
console.log("var: " + VarVariableVar ); //locale

// => var est à chaque fois ré-écrite, donc si on l'utilise dans une autre fonction de notre script, la valeur sera écrasée
