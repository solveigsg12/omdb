import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [movieTitle, setMovieTitle] = useState("lucky+number+slevin");
  const [movieInfo, setMovieInfo] = useState([])
  useEffect(()=> {
    fetch(`http://www.omdbapi.com/?apikey=aa7c9259&t=+${movieTitle}`)
    .then(res => res.json())
    .then(
      (data) => {
        setMovieInfo(data); 
      },
      (error) => {
        console.log(error)
      }
    )
  },[movieTitle])
  return (
    <div className={styles.container}>
    helloo
    </div>
  )
}
