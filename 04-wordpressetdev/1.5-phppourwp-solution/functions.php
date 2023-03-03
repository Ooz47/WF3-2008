<?php

/**
 * Ajouter fichiers de mise en forme
 */
function phppourwp_theme_styles() {

  wp_enqueue_style( 'font-css', 'https://fonts.googleapis.com/css?family=Open+Sans|Varela+Round' );

  wp_enqueue_style( 'main-css', get_stylesheet_uri(), 'font-css', get_the_time() );

}
add_action( 'wp_enqueue_scripts', 'phppourwp_theme_styles' );


/**
 * Ajouter "lire la suite" à un extrait de  post 
 *
 * @param string $excerpt L'extrait du post
 * @return string $extended_excerpt L'extrait du post avec un lien lire la suite
 */
function phppourwp_lien_lire_la_suite( $excerpt ) {

  // Créer une variable $extended_excerpt and
  // et lui affecter la valeur $excerpt
  $extended_excerpt = $excerpt;

   // Ajouter un lien "lire la suite" en utilisant get_permalink() comme url
  $extended_excerpt .= ' <a class="more-link" href="' . get_permalink() . '">Lire la suite &raquo;</a>';

  // Renvoyer $extended_excerpt
  return $extended_excerpt;

}
add_filter( 'get_the_excerpt', 'phppourwp_lien_lire_la_suite', 10 );


?>
