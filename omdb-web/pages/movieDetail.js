import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import MovieCard from '../components/features/Movie/MovieCard';
import styles from '../styles/MovieDetails.module.css';

export default function MovieSearch() {
  const router = useRouter();
  const [movieInfo, setMovieInfo] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const { imdbId } = router.query;
  useEffect(() => {
    fetch(
      `http://www.omdbapi.com/?apikey=aa7c9259&i=${imdbId}&plot=full&r=json`
    )
      .then((res) => res.json())
      .then(
        (data) => {
          if (data.Response === 'True') {
            setMovieInfo(data);
            setErrorMessage("");
          } else {
            setErrorMessage('Sorry, something went wrong. Please try again.');
          }
        },
        (error) => {
          setErrorMessage('Sorry, something went wrong. Please try again.');
        }
      );
  }, []);

  return (
    <div className={styles.container}>
      {movieInfo && movieInfo.Response === 'True' ? (
        <MovieCard
          movieInfo={movieInfo}
          isSearchMode={false}
          imageWidth={450}
          imageHeight={500}
        />
      ) : (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
    </div>
  );
}
