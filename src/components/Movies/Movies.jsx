import React from "react";

import styles from "./Movies.module.css";
import Movie from "./Movie.jsx";

function Movies(props) {
  return props.movies.map((value, idx) => (
    <Movie className={styles.movieCard} key={idx} movies={value} />
  ));
}

export default Movies;
