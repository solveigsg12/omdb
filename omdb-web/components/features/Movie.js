import React, { useEffect, useState } from "react";


import styles from "../../styles/Movie.module.css";
import Button from "../Button";
import MovieDetails from "./MovieDetails";

export default function Movie() {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieInfo, setMovieInfo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch(
      `http://www.omdbapi.com/?apikey=aa7c9259&t=${movieTitle}&plot=full&r=json`
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
  }, [movieTitle]);
console.log(movieInfo, " hvad er movie info", movieTitle, " movie title", inputValue, " inputvalue")
  return (
    <div className={styles.container}>

    <div className={styles.searchcontainer}>

      <input
      className={styles.inputField}
        type="text"
        id={"movieInputSearch"}
        value={inputValue}
        placeholder="Search for movies or episodes"
        onChange={(event) => setInputValue(event.target.value)}
        
      >
      </input>
      <Button onClick={() => setMovieTitle(inputValue)}>Try it out</Button>
    </div>

    {movieInfo.Response === "True" && <MovieDetails movieInfo={movieInfo} />}

    </div>
  );
}
