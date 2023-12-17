/* eslint-disable react/prop-types */
import React from "react";
import Card from "react-bootstrap/Card";
import styles from './Movie.module.css';

function Movie(props) {
  console.log(props.movies);
  return(

  <Card style={{ width: "18rem" }}>
    <Card.Body className={styles.movieCard}>
      <Card.Title style={{ fontWeight: "bold", textAlign: "center" }}>
        {props.movies.name}
      </Card.Title>
      <img className={styles.posterImg} src={`https://image.tmdb.org/t/p/w500${props.movies.img}`}/>
      <ul>
        <li>Description: {props.movies.description}</li>
        <li>Average Votes: {props.movies.voteAvg}</li>
      </ul>
    </Card.Body>
  </Card>
  )
}

export default Movie;