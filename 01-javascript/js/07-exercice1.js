// Réaliser une fonction permettant à l'utilisateur de :
//     - Saisir son prénom dans un Prompt
//     - Retourner à l'utilisateur: Bonjour [PRENOM], Quel age as-tu?
//     - Saisir son âge
//     - Retourner à l'utilisateur: Tu es donc né en  [ANNEE DE NAISSANCE].
//     - Afficher ensuite un récapitulatif dans la page
//     Bonjour [PRENOM], tu as [AGE] !

// -- 1. Création d'une fonction
function presentation() {

    // -- 2. Demande à l'utilisateur son prénom via un prompt
    var prenom = prompt("Quel est votre prénom ?", '<Votre prénom>');
    console.log( prenom );

    // -- 3. Je lui demande son age
    var age = parseInt(
        prompt("Bonjour" + prenom + ", Quel age as-tu ?", '<Votre age>')
    );
    console.log( age );
    console.log( typeof age );

    // -- 4. Calculer l'année de naissance
        var objetDate = new Date();
        var anneeActuelle = objetDate.getFullYear();
        var dateDeNaissance = anneeActuelle - age;
        alert("Tu es donc né en " + dateDeNaissance);

    // -- 5. Afficher le récapitulatif
    document.write("Bonjour " + prenom + " tu as " + age + " !");

}

presentation();