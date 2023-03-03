<?php

/**
 * Ajouter fichiers de mise en forme
 */
function phppourwp_theme_styles() {

  // Ajouter google fonts https://fonts.googleapis.com/css?family=Open+Sans|Varela+Round
  // Ajouter main-css en le rendant dépendant de google font

}
// Ajouter la fonction phppourwp_theme_styles au hook d'action wp_enqueue_scripts 
add_action( '', '' );


/**
 * Ajouter "lire la suite" à un extrait de  post 
 *
 * @param string $excerpt L'extrait du post
 * @return string $extended_excerpt L'extrait du post avec un lien lire la suite
 */
function phppourwp_lien_lire_la_suite( $excerpt ) {

  // Créer une variable $extended_excerpt and
  // et lui affecter la valeur $excerpt

  // Ajouter un lien "lire la suite" en utilisant get_permalink() comme url

  // Renvoyer $extended_excerpt

}
// Ajouter la fonction phppourwp_lien_lire_la_suite au filter hook get_the_excerpt
// avec priority de 10
add_filter( '', '', 0 );


?>
