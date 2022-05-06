import React from "react";

import styles from "../styles/Home.module.css";

import Movie from "../components/features/Movie";

export default function Home() {


  return (
    <div className={styles.container}>
      <Movie></Movie>
    </div>
  );
}
