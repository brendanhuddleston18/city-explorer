import React from "react";
import { When } from "react-if";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./Weather.module.css";

function Weather(props) {
  // console.log(props.weather[0].date);
  return (
    <When condition={props.selectedCity}>
      <Card className={styles.Card} style={{ width: "18rem" }}>
        <Card.Body>
          <ul>
            <li>Date: {props.weather.date}</li>
            <li>High: {props.weather.highTemp}</li>
            <li>Low: {props.weather.lowTemp}</li>
          </ul>
        </Card.Body>
      </Card>
    </When>
  );
}

export default Weather;
