import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './Movies.module.css';
import Movie from './Movie.jsx';


function Movies(props) {

  return (

    props.movies.map((value, idx) => {
      return (
        <Movie className={styles.movieCard} key={idx} movies={value} />
      )
      
    })
    )}
    

export default Movies;