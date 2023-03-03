<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>PHP pour WordPress - Exo 3</title>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans|Varela+Round" rel="stylesheet">
  <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/style.css">
</head>
<body>

  <header id="masthead">
    <h1><a href="#">PHP pour WordPress - Exo 3 - Template tags</a></h1>
  </header>

  <div id="content">

<!-- Ajouter des templates tags hors du loop -->

    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

      <!-- Ajouter des templates tags dans le loop -->

      <h2><?php the_title(); ?></h2>
      <?php the_content(); ?>

    <?php endwhile; else: ?>

      <h2><?php esc_html_e( '404 Erreur', 'phppourwp' ); ?></h2>
      <p><?php esc_html_e( 'Désolé, contenu non trouvé', 'phppourwp' ); ?></p>

    <?php endif; ?>

<!-- Ajouter des templates tags hors du loop -->

  </div>

</body>
</html>
