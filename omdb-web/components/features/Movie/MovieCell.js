import React from 'react';

import styles from '../../../styles/MovieCell.module.css';

export default function MovieCell(props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.value}>{props.value}</div>
    </div>
  );
}
