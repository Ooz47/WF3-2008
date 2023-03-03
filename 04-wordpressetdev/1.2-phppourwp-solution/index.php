<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>PHP pour WordPress - Exo 2 - Solution</title>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans|Varela+Round" rel="stylesheet">
  <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/style.css">
</head>
<body>

  <header id="masthead">
    <h1><a href="#">PHP pour WordPress - Exo 2 - Solution</a></h1>
  </header>

  <div id="content">

    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

      <h2><?php the_title(); ?></h2>
      <?php the_content(); ?>

    <?php endwhile; else: ?>



    <?php endif; ?>

  </div>

</body>
</html>
