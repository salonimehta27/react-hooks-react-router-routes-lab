import React from "react";
import { directors } from "../data";

function Directors() {
  // console.log(directors)
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => {
        return (
          <div key={director.name}>
            <h4>Name: {director.name}</h4>
            <p>Movies: </p>
            {director.movies.map(mov => <ul key={mov}><li>{mov}</li></ul>)}

          </div>
        )
      })}

    </div>)
}

export default Directors;
