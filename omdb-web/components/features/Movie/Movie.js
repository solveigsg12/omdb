import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import styles from '../../../styles/Movie.module.css';
import MovieCard from './MovieCard';

export default function Movie() {
  const [movieSearch, setMovieSearch] = useState({});
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (inputValue.length >= 2) {
      fetch(
        `http://www.omdbapi.com/?apikey=aa7c9259&s=${inputValue}&plot=full&r=json`
      )
        .then((res) => res.json())
        .then(
          (data) => {
            setMovieSearch(data);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }, [inputValue]);
  return (
    <div className={styles.container}>
      <div className={styles.searchcontainer}>
        <input
          className={styles.inputField}
          type="text"
          id={'movieInputSearch'}
          value={inputValue}
          placeholder="Search for movies or episodes"
          onChange={(event) => setInputValue(event.target.value)}
        ></input>
      </div>
      {movieSearch.Response === 'True' &&
        movieSearch.Search.map((movie) => {
          return (
            <div className={styles.movieCardContainer} key={movie.imdbID}>
              <MovieCard
                movieInfo={movie}
                onClick={() =>
                  router.push(`/movieDetail?imdbId=${movie.imdbID}`)
                }
                isSearchMode={true}
              />
              ;
            </div>
          );
        })}
    </div>
  );
}
