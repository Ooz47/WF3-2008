<?php get_header(); ?>

  <div id="content">

    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

      <article <?php post_class(); ?> >

        <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>

        <?php the_content(); ?>

        <footer>
          <p class="byline">
            Auteur:
            <a href="<?php echo get_author_posts_url( $post->post_author ); ?>"><?php the_author(); ?></a> |
            Date:
            <?php the_time( 'j/m/Y' ); ?> |
            Categories:
            <?php the_category( ',' ); ?> |
            Tags:
            <?php the_tags( '', ',', '' ); ?>
          </p>
        </footer>

      </article>

    <?php endwhile; else: ?>

      <h2><?php esc_html_e( '404 Erreur', 'phppourwp' ); ?></h2>
      <p><?php esc_html_e( 'Désolé, contenu non trouvé', 'phppourwp' ); ?></p>

    <?php endif; ?>

  </div>

<?php get_footer(); ?>
