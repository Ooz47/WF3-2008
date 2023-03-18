function majCompteur() {
    let nombreResultats = document.getElementsByClassName('voiture').length;
    // console.log(nombreResultats);

    let nbreVoitures = document.getElementById("nbreVoitures");
    // console.log(nombreResultats);
    // console.log(nbreVoitures.getElementsByTagName("span"));
    nbreVoitures.getElementsByTagName("span")[0].innerHTML = nombreResultats + " ";
}

majCompteur();