/******************
 * LES CONDITIONS *
 ******************/

/*
if(condition) {
    instruction1
}
else {
    instruction2
}
*/

var majoriteLegaleFr = 19;

// if(19 >= majoriteLegaleFr){

//     /*
//     Comme 19 est bien supérieur à 18 (majoriteLegaleFr)
//     alors les instructions de ma conditions sont executées.
//      */
//     alert('bienvenue');
// }

if ( 18 == majoriteLegaleFr) {
/* Comme 18 n'est pas égal à 21, les instructions ne sont pas executées */
    alert('Ok ça passe, mais c\'est juste');
}
else if ( 18 < majoriteLegaleFr) {
/* Comme 18 est inférieur à 21, les instructions sont executées */
    alert('Bienvenue');
}

else {
    /* Si aucune des conditions au dessus n'ont été validés, alors je rentre else */
    alert('Vous êtes trop jeune');
}

/*
if(condition1) {
    instruction1
}
else if(condition2) {
    instruction2
}
else if(condition3) {
    instruction3
}
else {
    instruction2
}
*/


/*****************************
 * OPERATEURS DE COMPARAISON *
 *****************************/
/*
L'opérateur de comparaison " == " signifie : Egal à
Il permet de vérifier que 2 variables sont identiques.

L'opérateur de comparaison " === " signifie : Strictement égal à. 
Il va comparer la valeur, mais aussi le type

if( 14 == "14" ) { } = true
if( 14 === '14') { } = false
if( 14 === 14) { } = true

L'opérateur " != " : Différent de.
L'opérateur " !== " : Strictement différent de

if(12 != 14) {} = true
if(12 !== '14') {} = true
if(12 !== 12) { } = false
if( 12 !== '12') {} = true ;Ici , 12 est bien différent de 12 à cause du type  

*/


/*************
 * EXERCICE1 *
 *************/
/*
- Soit les variables var1, var2 et var3 déjà déclarées et qui contiennent du texte.
- Déclarez la variable texteComplet
- Concaténez les 3 variables dans leur ordre (de var1 à var3)
- Récupérez l'ensemble du texte concaténé dans texteComplet
- Créez une structure pour vérifier si longueur de texte Complet est strictement supérieur à 100
- Si c'est vérifiée, affichez "c'est une grande phrase" avec alert()
- Si ce n'est pas vérifié , affichez "c'est une petite phrase avec alert()" 

*/
// var var1 = 'Je suis une chaîne de caractères ';
// var var2 = ' concaténée à partir de plusieurs ';
// var var3 = 'sous-chaînes contenues dans var1, var2 et var3.';

// var texteComplet;
// /* La  concaténation ... */
// texteComplet = var1 + var2 + var3;

// /* La condition ici */
// if(texteComplet.length > 100) {
// 	alert( "c\'est une grande phrase !");
// }
// else {
//     alert( "c\'est une petite phrase !");
// }



/*************
 * EXERCICE2 *
 *************/
 /*
 - récupérer l'age du visiteur en utilisant prompt
 - Créer une fonction, qui vérifie l'âge d'un visiteur
 - Si il a la majorité, lui souhaiter la bienvenue avec alert(),
 - sinon, je fais une redirection vers google après avoir afficher la raison via alert()
 */

 // -- 1. Créer une fonction permettant de vérifier la majorité d'un utilisateur
// function monUtilisateurEstMajeur(age) {
//     if (age >= 18) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// // -- 2. Je demande à l'utilisateur son age.
// const ageSaisieParMonUtilisateur = parseInt( 
//     prompt("Bonjour, Quel age avez-vous ?","<Saisissez votre age>") 
// );

// // -- 3. Vérification de son age (Condition)
// if( monUtilisateurEstMajeur( ageSaisieParMonUtilisateur ) ) {

//     alert("Bienvenue sur mon site réservé aux majeurs !");

// } else {

//     // -- 4. Redirection en cas d'echec
//     alert('Vous devez être majeur pour accéder à ce site.');
//     document.location.href = "https://google.fr";

// }

/************
 * EXERCICE *
 ************/
/* 
L'utilisateur doit s'identifier avec email et mot de passe (récupérer les données via prompt).
Les identifiants doivent correspondre à ceux fournis.
En cas d'échec, alert: connection non-autorisé
Sinon, message de bienvenue
*/

// // -- BASE DE DONNEES
const email = "user@test.com";
const mdp = "wf3";

// -- 1. Demander à l'utilisateur son email/mdp
const emailPrompt = prompt("Quel est votre e-mail ?", "<Saisissez votre Email>");
const mdpPrompt = prompt("Quel est votre mdp ?", "<Saisissez votre Mot de Passe>");

// -- 2. Je vérifie si l'email / mdp saisie par l'utilisateur correspondent avec ceux dans la BDD.
// if ( email === emailPrompt ) {

//     if(mdp === mdpPrompt) {
//         alert("Bienvenue " + emailPrompt + " !");
//     }
//     else {
//         alert("Erreur, le mot de passe est incorrect!");
//     }
// }
// else {
//     alert("Erreur, l'email est incorrect!");
// }

// if ( email === emailPrompt && mdp === mdpPrompt ) {
//     // -- 3. Tous est ok, l'utilisateur est authentifié
//     alert("Bienvenue " + emailPrompt + " !");
// } else {
//     // -- 4. Erreur au niveau de l'authentification
//     alert("ATTENTION, email / mdp incorrect.");
// }
// function connexion(emailUser, mdpUser){
//     if ( email === emailUser && mdp === mdpUser ) {
//         // -- 3. Tous est ok, l'utilisateur est authentifié
//         return true;
//     } else {
//         // -- 4. Erreur au niveau de l'authentification
//         return false;
//     }
// }

// if ( connexion( emailPrompt, mdpPrompt ) ) {
//     alert("Bienvenue " + emailPrompt + " !");
// } else {
//     alert("ATTENTION, email / mdp incorrect.");
// }

/***************************
 * LES OPERATEURS LOGIQUES *
 ***************************/
// L'Opérateur ET : &&. 
// Si la combinaison email et emailUser     
// correspond, ET la combinaison mdp et mdpUser correspond.

// --> Dans cette condition, les 2 doivent OBLIGATOIREMENT         
// correspondre pour être validée. 
// Ex. if(emailUser === email && mdpUser === mdp) { ... } 

// ----------

// L'Opérateur OU : ||. 
// Si la combinaison email et emailUser     
// correspond, ET / OU la combinaison mdp et mdpUser correspond.

// --> Dans cette condition, au moins l'une des deux doit          
// correspondre pour être validée.                                 
// Ex. if(emailUser === email || mdpUser === mdp) { ... }   

// L'Opérateur " ! " ou encore NOT.                              |
// Il signifie le CONTRAIRE DE, DIFFERENT DE 

// var monUtilisateurEstApprouve = true;
// if(!monUtilisateurEstApprouve) { ... }

// revient à écrire

// if(monUtilisateurEstApprouve === false) { ... }
