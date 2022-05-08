import React, { useEffect, useState } from 'react';

import styles from '../../../styles/Movie.module.css';
import MovieCard from './MovieCard';

export default function Movie() {
  const [movieSearch, setMovieSearch] = useState({});
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if(inputValue.length > 2){
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
      );}
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
          return  <MovieCard movieInfo={movie} key={movie.imdbID}/>;
        })}
    </div>
  );
}
