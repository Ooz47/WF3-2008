<?php get_header(); ?>

<div id="content">

  <!-- Page d'accueil statique-->

  <?php if (is_front_page() && !is_home()) : ?>

    <h1>Page d'accueil statique</h1>

  <?php endif; ?>


  <!-- Accueil blog -->


  <?php if (is_home()) : ?>

    <h1>Blog Home</h1>

  <?php endif; ?>

  <!-- Page (pas l'accueil) -->


  <?php if (is_page() &&  !is_front_page()) : ?>

    <h1>Page</h1>

  <?php endif; ?>

  <!-- Single Post -->


  <?php if (is_single() && !is_attachment()) : ?>

    <h1>Post</h1>

  <?php endif; ?>

  <!-- Single Attachment (Media) -->

  <?php if (is_attachment()) : ?>

    <h1>Attachment</h1>

  <?php endif; ?>


  <!-- Archive de Categorie  -->


  <?php if (is_category()) : ?>

    <h1><?php single_cat_title(); ?></h1>

  <?php endif; ?>

  <!-- Archive de Tags (mots clés)  -->


  <?php if (is_tag()) : ?>

    <h1><?php single_tag_title(); ?></h1>

  <?php endif; ?>

  <!--  Archive  auteur-->

  <?php if (is_author()) : ?>

    <h1><?php the_archive_title(); ?></h1>

  <?php endif; ?>


  <!-- Archive Date  -->

  <?php if (is_date()) : ?>

    <h1><?php the_archive_title(); ?></h1>

  <?php endif; ?>


  <!-- Page 404  -->
  <?php if (is_404()) : ?>

    <h1><?php esc_html_e('404 - Contenu non trouvé', 'phpforwp'); ?></h1>

  <?php endif; ?>

</div>

<?php get_footer(); ?>