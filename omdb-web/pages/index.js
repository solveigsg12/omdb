import React, { useEffect, useState } from 'react';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [movieTitle, setMovieTitle] = useState("lucky+number+slevin");
useEffect(()=> {
  fetch(`http://www.omdbapi.com/?apikey=aa7c9259&t=+${movieTitle}`)
  .then(res => res.json())
  .then(
    (data) => {
      console.log(data)
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
