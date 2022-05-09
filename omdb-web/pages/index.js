import React from 'react';

import styles from '../styles/Home.module.css';
import Movie from '../components/features/Movie/Movie';
import Header from '../components/features/Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Movie/>
    </div>
  );
}
