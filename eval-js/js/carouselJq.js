function carousel() {
    for (j = 0; j < $(".voiture").length; j++) {
        // console.log(j);
        // j = 0;
        console.log($(".voiture")[j]);
        var imgnum = 0;
        var toutesLesImages = $(".voiture").eq(j).find('.imagesVehicule img');
        var toutesLesImagesNombre = $(".voiture").eq(j).find('.imagesVehicule img').length;
        console.log(toutesLesImagesNombre);

        for (i = 1; i < toutesLesImagesNombre; i++) {
            // console.log(i);
            toutesLesImages.eq(i).css('display', 'none');
        }

        $(".voiture").eq(j).find(".suiv").click(function () {
            if (imgnum != toutesLesImagesNombre - 1) {
                imgnum++;
            } else {
                imgnum = 0;
            }
            $(this).parent().find('.imagesVehicule img').css('display', 'none');
            $(this).parent().find('.imagesVehicule img').eq(imgnum).css('display', 'inline-block');
        });

        $(".voiture").eq(j).find(".prec").click(function () {
            if (imgnum != 0) {
                imgnum--;
            } else {
                imgnum = toutesLesImagesNombre - 1;
            }
            console.log($(this).parent().find('.imagesVehicule img'));
            $(this).parent().find('.imagesVehicule img').css('display', 'none');
            $(this).parent().find('.imagesVehicule img').eq(imgnum).css('display', 'inline-block');
        });

    }
}

$(document).ready(function () {
    carousel();
});


// /* Solution avec each() */
// function carousel() {

//     $('.voiture').each(function (e) {
//         //traitement de l'événement

//         console.log($(this));
//         var imgnum = 0;
//         var toutesLesImages = $(this).find('.imagesVehicule img');
//         var toutesLesImagesNombre = toutesLesImages.length;
//         // console.log(toutesLesImagesNombre);

//         for (i = 1; i < toutesLesImagesNombre; i++) {
//             // console.log(i);
//             toutesLesImages.eq(i).css('display', 'none');
//         }

//         $(this).find(".suiv").click(function () {
//             if (imgnum != toutesLesImagesNombre - 1) {
//                 imgnum++;
//             } else {
//                 imgnum = 0;
//             }
//             toutesLesImages.css('display', 'none');
//             toutesLesImages.eq(imgnum).css('display', 'inline-block');
//         });

//         $(this).find(".prec").click(function () {
//             if (imgnum != 0) {
//                 imgnum--;
//             } else {
//                 imgnum = toutesLesImagesNombre - 1;
//             }
//             toutesLesImages.css('display', 'none');
//             toutesLesImages.eq(imgnum).css('display', 'inline-block');
//         });
//     });

// }


// $(document).ready(function () {
//     carousel();
// });