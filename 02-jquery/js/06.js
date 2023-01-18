/*************************
 * VALIDATION DES CHAMPS *
 *************************/
// L’utilisation des formulaires sur le Web est très répandue et avec JavaScript 
// et la bibliothèque jQuery il est devenu possible d’ajouter des systèmes de vérification
// complets qui aident l’internaute à se repérer dans les étapes du formulaire.

$(function() {
    $("#validation").submit(function(event){
    // -- Permet d'annuler l'action par défaut du submit (La redirection HTML)
    event.preventDefault();
    
    // La méthode .val() est principalement utilisée pour obtenir 
    //les valeurs des éléments de formulaire tels que input, select et textarea. 
    var prenom = $("#prenom").val();
    var nom = $("#nom").val();
    
    console.log('Le prénom est : ' + prenom);
    console.log('Le nom est : ' + nom);

    if (prenom.length >= 0 && nom.length <= 10) {
        console.log('Le prénom est : ' + prenom);
        console.log('Le nom est : ' + nom);
        } else {
        $("#helpForm").html("Vous devez remplir <b>tous les champs</b>");
        };

    });
});