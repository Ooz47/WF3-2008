function chargeVehicules() {
    //On crée un objet XMLHttpRequest
    let xhr = new XMLHttpRequest();
    //On accede à notre ressource en GET de façon asynchrone
    xhr.open("GET", "./voitures.txt", true);
    //Quand on a une réponse
    xhr.onload = function () {
        document.getElementById('voitures').innerHTML += this.responseText;
        carousel();
        majCompteur();
        effetHover();
    }
    // On envoie notre requete
    xhr.send();
};


//javascript load scroll
// https://stackoverflow.com/questions/14035180/jquery-load-more-data-on-scroll
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
            // Requête ajax pour récupérer données et les ajouter à une div
            chargeVehicules();
        }
    });

});


// // Exemple Jquery ajax
// // https://api.jquery.com/jquery.ajax/
// $(document).ready(function () {
// $(window).scroll(function() {
//     if($(window).scrollTop() == $(document).height() - $(window).height()) {

// $.ajax({
//     method: "GET",
//     url: "./voitures.txt",
//   })
//     .done(function( html ) {
//     //   alert( "Document chargé " + html );

//     $('#voitures').append( html );

//     //Ajout d'un fadeIn
//     // $(html).hide().appendTo("#voitures").fadeIn(1500);

//         carousel();
//         majCompteur();
//         effetHover();
//     });
//     }
// });
// });