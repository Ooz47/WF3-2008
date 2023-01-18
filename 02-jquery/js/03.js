// Les événements sont utilisés pour déclencher des fonctions à différents moments d’interactions avec l’utilisateur.

// https://api.jquery.com/category/events/
// https://learn.jquery.com/events/event-basics/

$(function() { // DOM is ready !
$('input').hover(function(){
    console.log('Le curseur est au-dessus de l\'input');
    });

$('input').focus(function(){
    console.log('Le curseur est dans l\'input');
});

$('input').blur(function(){
console.log('Le curseur est sorti de l\'input');
});
    
$(window).scroll(function(){
    console.log('L\'utilisateur fait défiler la page ');
    });

//Ecouteur d'evenement en JS
// function changerLaCouleurEnRouge(){
//     console.log('L\'utilisateur fait défiler la page ');
// }
// window.addEventListener('scroll', changerLaCouleurEnRouge);

});


/********
 * EXO: *
 ********/
// - Créer une div avec une classe "maClass" en HTML 
// - Utiliser un selecteur Jquery pour affecter l'element ayant la classe "maClass" à une variable
// - Afficher mon element dans la console
// - Ajouter un gestionnaire d'evenements jquery qui affiche dans le log "survol de la souris" au "survol de la souris"
//  de ma div "maClass"
$(function() {
    var div = $(".maClass");
    console.log(div);

    // $(div).hover(function(){
    $(".maClass").hover(function(){
        console.log('survol de la souris');
        });
});



