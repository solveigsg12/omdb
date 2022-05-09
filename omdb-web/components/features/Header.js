import React, { useEffect } from 'react';

import lottie from 'lottie-web/build/player/lottie_light';

import styles from '../../styles/Header.module.css';
import watchMovie from '../../assets/watchMovie.json';

export default function Header() {
  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: document.querySelector('#watch-movie'),
      animationData: watchMovie,
      renderer: 'svg', // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
    });

    // Return clean up function here
    return () => instance.destroy();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.largeText}>
        Welcome to Moogle, where you can find{' '}
        <span className={styles.orange}>movies</span> and{' '}
        <span className={styles.orange}>episodes </span>
        <div className={styles.smallText}>
          Search any movie or episode and get relevant information about them.
          Kind of like Google.
        </div>
      </div>
      <div className={styles.image}>
        <div id="watch-movie" />
      </div>
    </div>
  );
}
