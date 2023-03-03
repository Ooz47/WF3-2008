<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>PHP pour WordPress- Exo 1 Solution</title>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans|Varela+Round" rel="stylesheet">
  <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/style.css">
</head>
<body>

  <header id="masthead">
    <h1><a href="#">PHP pour WordPress- Exo 1 Solution</a></h1>
  </header>

  <div id="content">


    <?php

     // Créer un tableau avec 3 valeurs string, ex: "Salut world" 
      $posts = array(
        'Salut World',
        'PHP pour WordPress',
        'WP et dev'
      );

      
      // à l'aide d'une boucle foreach passer sur chaque élément
      foreach( $posts as $post ) {

      // Afficher chaque élément avec la function affiche_titre
      affiche_titre( $post );
      }

      /**
       *
       * @param string $titre Le titre à afficher
       */
      function affiche_titre( $titre ) {

          // Faire echo de $titre dans balise <a> dans un <h3>
        echo "<h3><a href=\"#\">$titre</a></h3>";

      }

    ?>

    <!-- Exemple var_export()  -->
  <pre>
      <?php var_export( $posts ); ?>
      </pre>
  </div>

</body>
</html>
