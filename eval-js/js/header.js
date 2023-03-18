var images = [
  './img/background.jpg',
  './img/background1.jpg',
  './img/background2.jpg',
  './img/background3.jpg'
];

var header = document.getElementsByTagName('header')[0];
// console.log(images.length);
var imageIndex = 0;

/* Avec SetTimeout */
function changerBackground() {
  imageIndex++;
  if (imageIndex >= images.length) {
    imageIndex = 0;
  }
  header.style.backgroundImage = "url('" + images[imageIndex] + "')";
  setTimeout(changerBackground, 15000);
}

setTimeout(changerBackground, 15000);



// Avec setInterval

// function changerBackground() {
//   imageIndex++;
//   if (imageIndex >= images.length){
//     imageIndex = 0;
//   }
//   header.style.backgroundImage = "url('" + images[imageIndex] + "')";
//   console.log(imageIndex);
// }
// setInterval( changerBackground, 15000);


//OU
// setInterval(function(){
//   imageIndex++;
//   if (imageIndex >= images.length){
//     imageIndex = 0;
//   }
//   header.style.backgroundImage = "url('" + images[imageIndex] + "')";
// }, 15000);