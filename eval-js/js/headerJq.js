$(document).ready(function(){

  var images = [
    './img/background.jpg',
    './img/background1.jpg',
    './img/background2.jpg',
    './img/background3.jpg'
  ];
  
  var imageIndex = 0;
  
  function changerBackground(){
  
     $('header').animate({ opacity: 1 }, 500,function(){
  
          //on baisse l'opacité         
          $('header').animate({ opacity: 0.7 }, 200,function(){
  
            imageIndex++;
              if(imageIndex > images.length-1){
                imageIndex=0;
              }
  
              //on change l'image du background              
              $('header').css("background-image", "url("+images[imageIndex]+")"); 
  
              //on remet l'opacité
              $('header').animate({ opacity: 1 }, 400,function(){
  
                  //on rappelle la function avec setTimeout
                  setTimeout(changerBackground,3000);
  
              });
  
          });
  
      });
  
    }
    setTimeout(changerBackground,3000);
  
  });
