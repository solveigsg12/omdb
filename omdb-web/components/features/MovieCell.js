import React from 'react';

import styles from '../../styles/MovieCell.module.css';

export default function MovieCell(props) {
  return (
    <div className={styles.container}>
      <div>{props.title}:</div>
      <div>{props.value}</div>
    </div>
  );
}
