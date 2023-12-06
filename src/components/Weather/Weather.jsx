import React from "react";
import { When } from "react-if";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./Weather.module.css";

function Weather(props) {
  return (
    <When condition={props.selectedCity}>
      <Card className={styles.Card} style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.selectedCity}</Card.Title>
          <ul>
            {props.weather.map((value) => (
              <li key={value.date}>
                {value.date}
                {value.description}
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </When>
  );
}

export default Weather;
