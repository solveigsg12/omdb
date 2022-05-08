import React from 'react';

import Image from 'next/image';

import styles from '../../../styles/MovieCard.module.css';
import MovieCell from './MovieCell';

export default function MovieDetails(props) {
  return (
    <div className={styles.container} onClick={props.onClick}>
      {props.isSearchMode ? (
        <div className={styles.textInfoContainer}>
          <MovieCell title={'Title'} value={props.movieInfo.Title} />
          <MovieCell title={'Type'} value={props.movieInfo.Type} />
          <MovieCell title={'Year of release'} value={props.movieInfo.Year} />
        </div>
      ) : (
        <div className={styles.textInfoContainer}>
          <MovieCell title={'Title'} value={props.movieInfo.Title} />
          <MovieCell title={'Year'} value={props.movieInfo.Year} />
          <MovieCell title={'Released'} value={props.movieInfo.Released} />
          <MovieCell title={'Runtime'} value={props.movieInfo.Runtime} />
          <MovieCell title={'Genre'} value={props.movieInfo.Genre} />
          <MovieCell title={'Director'} value={props.movieInfo.Director} />
          <MovieCell title={'Actors'} value={props.movieInfo.Actors} />
          <MovieCell title={'Plot'} value={props.movieInfo.Plot} />
          <MovieCell title={'Language'} value={props.movieInfo.Language} />
          <MovieCell title={'Country'} value={props.movieInfo.Country} />
          <MovieCell title={'Awards'} value={props.movieInfo.Awards} />
          <MovieCell title={'imdbRating'} value={props.movieInfo.imdbRating} />
          <MovieCell title={'imdbVotes'} value={props.movieInfo.imdbVotes} />
        </div>
      )}
      {props.movieInfo.Poster !== 'N/A' &&
      props.movieInfo.Poster !== undefined ? (
        <div className={styles.imageContainer}>
          <Image
            src={props.movieInfo.Poster}
            alt="Poster picturer"
            width={props.imageWidth || 250}
            height={props.imageHeight || 300}
          />
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
