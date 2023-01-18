/**********
 * LE DOM *
 **********/
/*
          Le DOM (Document Object Model) est une interface de développement en JS pour HTML.      
          Grâce au DOM, je vais être en mesure d'accéder / modifier mon   
          code HTML.                                                      
                                                                          
          L'Objet "document" : c'est le point d'entrée vers mon contenu   
          HTML.                                                           
                                                                          
          Chaque page chargé dans mon navigateur à un objet "document"    
*/

/**
 * Comment puis-je faire pour récupérer
 * les différentes informations de ma page HTML ?
 */


/******************************
 * DOCUMENT.GETELEMENTBYID(); *
 ******************************/
//  document.getElementById() est une fonction qui
//  va permettre de récupérer un élément HTML à    
//  partir de son identifiant unique : ID    

var bonjour = document.getElementById('bonjour');
console.log( bonjour );

/**************************************
 * DOCUMENT.GETELEMENTSBYCLASSNAME(); *
 **************************************/
//  document.getElementsByClassName() : C'est une  
//  fonction qui va permetttre de récupérer un ou  
//  plusieurs éléments (une liste) HTML à partir   
//  de leur classe. 

var contenu = document.getElementsByClassName('contenu');
console.log( contenu );

/************************************
 * DOCUMENT.GETELEMENTSBYTAGNAME(); *
 ************************************/
// document.getElementsByTagName() : C'est une    
// fonction qui va permetttre de récupérer un ou  
// plusieurs éléments (une liste) HTML à partir   
// de leur balise. 

var p = document.getElementsByTagName('p');
console.log(p);

 /***
  * Nous avons également le querySelector :
  * https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector
  */

//  La méthode querySelector, qui prend en argument une expression CSS, permet de cibler directement 
//  le premier élément d'un ensemble de nœuds. Par exemple, document.querySelector("#truc"); permet de sélectionner 
//  l'élément d'identifiant truc, mais document.querySelector(".machin"); ne sélectionne que le premier élément de classe machin.

// La méthode querySelectorAll, qui prend en argument une expression CSS, 
// permet de cibler tous les éléments d'un ensemble de nœuds. Par exemple, document.querySelectorAll("#truc"); 
// renvoie un tableau d'un item contenant l'élément d'identifiant truc, et document.querySelectorAll(".machin");
// renvoie un tableau contenant tous les éléments de classe machin.

// console.log( document.querySelector(".contenu"));

console.log( document.querySelector("#bonjour"));
console.log( document.querySelectorAll(".contenu"));
console.log( document.querySelectorAll("p"));

/************
 * EXERCICE *
 ************/
/* Récupérer chaque nouvel élément du html en 
utilisant les fonctions présentées plus haut,
si possible en utilisant 2 méthodes pour 
chacun des éléments
*/

console.clear();
var madiv = document.getElementById('maDiv');
console.log( madiv );

madiv = document.getElementsByTagName('div');
console.log( madiv );

console.log ( document.querySelector('footer') );
console.log ( document.getElementsByTagName('footer') );


console.clear();
console.log ( document.getElementsByClassName('maSection') );
console.log ( document.getElementsByTagName('section') );

//Pour accéder au contenu de mon élément
console.log ( document.getElementsByTagName('section')[0].textContent );

//Pour accéder au style
console.log ( document.getElementsByTagName('section')[0].style.color );

