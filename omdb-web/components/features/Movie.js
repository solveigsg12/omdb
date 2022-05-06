import React, { useEffect, useState } from "react";

import Button from '../Button'


export default function Movie() {
    const [movieTitle, setMovieTitle] = useState("lucky+number+slevin");
    const [movieInfo, setMovieInfo] = useState([]);
  
    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=aa7c9259&t=${movieTitle}&plot=full&r=json`)
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

  return (
    <div >
        
      <Button onClick={()=> console.log("hellooo")}>Try it out</Button>
    </div>
  );
}