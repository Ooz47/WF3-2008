/****************
 * LES TABLEAUX *
 ****************/

// -- Déclarer un tableau
var monTableau = [];
var monTableau = new Array; //Autre notation, mais identique.

monTableau[0] = 'Yannick';
monTableau[1] = 'Sandy';
monTableau[2] = 'Jessy';
monTableau[3] = 'Dylan';

console.log(monTableau);
console.log(monTableau[2]); // Jessy
console.log(monTableau[3]); // Dylan

var nosPrenoms = [
    'Manuel',
    'Gianni',
    'Maeva',
    'Manoella'
];

console.log(nosPrenoms);

// Ici on a 2 tableaux dans un tableau
// ou encore tableau à 2 dimensions
var annuaireDesApprenants = [
    ['Yannick','abaul'],
    ['Lionel','Messi']
];
console.log(annuaireDesApprenants);
console.log(annuaireDesApprenants[1][0]);


// -- Créer un Objet en Javascript

/*
Un objet respecte toujours le format 
{
    propriete : valeur
}

ou, la valeur peut être de plusieurs type : 
{
    unBooleen : true,
    unNombre: 18,
    unString : 'Je suis un string',
    unObjet: {
        propriete: valeur
    },
    unTableau: [
        'Matthieu','Marc','Luc'
    ]
}
*/

var coordonnee = {
    //Propriété    :   Valeur  ,
    prenom          :   'Yannick',
    nom             :   'ABAUL',
    age             :   25,
    tel             :   '0690333779'
};

console.log(coordonnee);
console.log(coordonnee['prenom']);
console.log(coordonnee.prenom); // Ecriture à privilégier


/**************************************
 * AJOUTER UN ÉLÉMENT DANS UN TABLEAU *
 **************************************/

console.clear();

var couleurs = ['Rouge', 'Jaune', 'Vert'];
console.log(couleurs);

couleurs.push('Bleu');
console.log(couleurs);

couleurs.unshift('Orange');
console.log(couleurs);


/********************************
 * SORTIR UN ÉLEMENT DU TABLEAU *
 ********************************/

/* La fonction pop() supprime le dernier élément 
d'un tableau et retourne cet élément */

var monDernierElement = couleurs.pop();
console.log(couleurs);
console.log(monDernierElement);

/* La même chose est possible avec le premier élément 
en utilisant : shift() */

var monPremierElement = couleurs.shift();
console.log(couleurs);
console.log(monPremierElement);