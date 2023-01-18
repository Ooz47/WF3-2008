$(function () {

    $('div').hide('slow',function(){
        // slow => 600ms ; fast => 200ms
        // alert('Fin du Hide');
         // On joue un peu avec le CSS
         $('div').css('background-color','yellow');
         $('div').css('color','red');
         $('div').show('slow');
    });


    // $('p').css('color','blue');
    // $('p').css('font-size','20px');

    // $('p')
    // .css({'color':'blue','font-size':'20px'})
    // .hide(2000)
    // .delay(2000)
    // .show(500);

    // $("#menu").click(function(){
    //     // console.log($(this).find('h3'));
       
    //     $(this)
    //     .fadeOut(200)
    //     .css({'color': 'blue', 'font-size':'20px'})
    //     .delay(2000)
    //     .show(100);

    //     $(this)
    //     .find('h3')
    //     .hide(200)
    //     .delay(3000)
    //     .show(100);
    // });

    // $("#menu")
    // .animate({
    //     width: '70%',
    //     opacity: 0,
    //     marginLeft: "30px"
    // }, 5000, "linear", function (){
    //     $( this ).after("<div>Animation terminée</div>")
    // });

/************
 * EXERCICE *
 ************/
    // Créer une fonction qui au click sur le 3ieme element du menu : “Saumon moutarde”, 
    // déplace l’élement de 100px sur la droite, 
    // le fait disparaitre avec method fadeOut, 
    // Ajouter un delay de 1s,
    // modifie le texte en “Saumon à l’ail”, 
    // le fait réapparaitre avec fadein, 
    // et le replace à sa position initiale

    // $("#menu").find('ul').find('li').eq(2).click(function(){
   
    //     $(this)    
    //     .animate({
    //             marginLeft: "100px",
    //         }, 1000, "linear", function () {
    //             $(this)
    //             .fadeOut()
    //             .delay(1000)
    //             .html('<li><a href="#">Saumon à l\'ail</a></li>')
    //             .fadeIn()
    //             .animate({
    //                     marginLeft: "0",
    //                 }, 1000, "linear");
    //         });
    //     });

    $("#menu").find('ul').find('li').eq(2).click(function () {
        $(this)
            .animate({
                marginLeft: "100px",
            }, 1000, "linear", function () {
                $(this).fadeOut();
                setTimeout(() => {
                    $(this)
                        .html('<li><a href="#">Saumon à l\'ail</a></li>')
                        .fadeIn()
                        .animate({
                            marginLeft: "0",
                        }, 1000, "linear", function () {});
                }, "1000");
            });
    });


});