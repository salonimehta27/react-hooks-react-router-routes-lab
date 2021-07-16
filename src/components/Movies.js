import React from "react";
import { movies } from "../data";

function Movies() {
  const movs = movies.map(mov => {
    return (<div key={mov.title}>
      <h4>Name: {mov.title}</h4>
      <p>Time: {mov.time}</p>
      <p>Genres:</p>
      {mov.genres.map(genre => <ul key={genre}><li >{genre}</li></ul>)}
    </div>)
  })
  return <div><h1>Movies Page</h1>
    {movs}</div>;
}

export default Movies;
