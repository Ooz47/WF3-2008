<?php

/* ENONCE DE L'EXO */

// - Dupliquer exo 1.5 phppour wordpress pour créer un nouveau theme
// - En s’inspirant de ce qui est fait, et de la doc, créer un filter hook qui modifie le titre de tous les posts, en ajoutant après le titre “- créé le $datedecréation”
//     - Ex: About - créé le 28/01/2023

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
 * @param string $excerpt The post excerpt
 * @return string $extended_excerpt Post excerpt with read more link
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



function modifier_les_titres( $titre ) {

  $titre_modifie = $titre;

  $titre_modifie .= '<small> - crée le ' ;
  $titre_modifie .= get_the_time( 'd/m/Y' ). '</small>';

  return $titre_modifie;

}
add_filter( 'the_title', 'modifier_les_titres', 11 );


?>
