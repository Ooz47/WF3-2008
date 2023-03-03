<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>PHP pour WordPress - Exo 3 - Template tags - Solution</title>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans|Varela+Round" rel="stylesheet">
  <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/style.css">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

  <header id="masthead">
    <h1><a href="#"><?php bloginfo( 'name' ); ?></a></h1>
  </header>
