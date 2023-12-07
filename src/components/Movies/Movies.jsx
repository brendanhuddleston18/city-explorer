import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './Movies.module.css';


function Movies(props) {

  return (
    <Card style={{ width: '18rem' }}>

    <Card.Body className={styles.movieCard}>
      <Card.Title>{props.movies.name}</Card.Title>
        <ul>
          <li>Description: {props.movies.description}</li>
          <li>Average Votes: {props.movies.voteAvg}</li>
        </ul>
    </Card.Body>
  </Card>
  )
}

export default Movies;