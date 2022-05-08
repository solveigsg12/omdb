import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import MovieCard from '../components/features/Movie/MovieCard';
import styles from '../styles/MovieDetails.module.css';

export default function MovieSearch() {
  const router = useRouter();
  const [movieInfo, setMovieInfo] = useState({});
  const { imdbId } = router.query;
  useEffect(() => {
    fetch(
      `http://www.omdbapi.com/?apikey=aa7c9259&i=${imdbId}&plot=full&r=json`
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setMovieInfo(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  return (
    <div className={styles.container}>
      <MovieCard
        movieInfo={movieInfo}
        isSearchMode={false}
        imageWidth={450}
        imageHeight={500}
      />
    </div>
  );
}
