import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MovieCell from '../components/features/Movie/MovieCell';

export default function MovieSearch() {
    const router = useRouter();
    const [movieInfo, setMovieInfo] = useState({});
    const {imdbId} = router.query
    useEffect(() => {
        fetch(
          `http://www.omdbapi.com/?apikey=aa7c9259&i=${imdbId}&plot=full&r=json`
        )
          .then((res) => res.json())
          .then(
            (data) => {
              setMovieInfo(data)
            },
            (error) => {
              console.log(error);
            }
          );
      }, []);
      return (
          <div>
             { movieInfo.Poster && <Image       
                src={movieInfo.Poster}
                alt="Poster picturer"
                width={100}
                height={100}
                layout="responsive"

      />}
            <MovieCell title={"Title"} value={movieInfo.Title}/>
              <MovieCell title={"Year"} value={movieInfo.Year}/>
              <MovieCell title={"Released"} value={movieInfo.Released}/>
              <MovieCell title={"Runtime"} value={movieInfo.Runtime}/>
              <MovieCell title={"Genre"} value={movieInfo.Genre}/>
              <MovieCell title={"Director"} value={movieInfo.Director}/>
              <MovieCell title={"Actors"} value={movieInfo.Actors}/>
              <MovieCell title={"Plot"} value={movieInfo.Plot}/>
              <MovieCell title={"Language"} value={movieInfo.Language}/>
              <MovieCell title={"Country"} value={movieInfo.Country}/>
              <MovieCell title={"Awards"} value={movieInfo.Awards}/>
              <MovieCell title={"imdbRating"} value={movieInfo.imdbRating}/>
              <MovieCell title={"imdbVotes"} value={movieInfo.imdbVotes}/>
              </div>
      )
}