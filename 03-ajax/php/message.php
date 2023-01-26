<?php
$commentaire = $_POST['commentaire'];
$utilisateur = $_POST['utilisateur'];

if(!empty($utilisateur) && !empty($commentaire)){

    echo "<p>Bonjour $utilisateur. Votre commentaire a été envoyé</p>";
    echo "<p>Commentaire: $commentaire</p>";
}
else {
    echo "<p>Renseignez tous les champs</p>";
}

?>