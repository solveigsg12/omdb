import React from 'react';

import styles from '../../styles/MovieDetails.module.css';
import MovieCell from './MovieCell';

export default function MovieDetails(props) {
  return (
    <div className={styles.container}>
      <div className={styles.textInfoContainer}>
        <MovieCell title={"Title"} value={props.movieInfo.Title}/>
        <MovieCell title={"Actors"} value={props.movieInfo.Actors}/>
        <MovieCell title={"Year of release"} value={props.movieInfo.Released}/>
        <MovieCell title={"Runtime"} value={props.movieInfo.Runtime}/>

       {props.movieInfo.Ratings && props.movieInfo.Ratings.length > 0 && <MovieCell title={"Ratings"} value={props.movieInfo.Ratings[0].Value }/>}

      </div>
      <img className={styles.image} src={props.movieInfo.Poster}></img>
    </div>
  );
}
