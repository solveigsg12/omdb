import React from 'react';
import { useRouter } from 'next/router'

import styles from '../../../styles/MovieCard.module.css';
import MovieCell from './MovieCell';

export default function MovieDetails(props) {
  const router = useRouter()
  return (
    <div className={styles.container} onClick={() => router.push(`/movieDetail?imdbId=${props.movieInfo.imdbID}`)}>
      <div className={styles.textInfoContainer}>
        <MovieCell title={"Title"} value={props.movieInfo.Title}/>
        <MovieCell title={"Type"} value={props.movieInfo.Type}/>
        <MovieCell title={"Year of release"} value={props.movieInfo.Year}/>
      </div>
      <img className={styles.image} src={props.movieInfo.Poster}></img>
    </div>
  );
}
