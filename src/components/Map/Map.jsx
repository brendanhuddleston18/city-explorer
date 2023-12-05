import { useState } from "react";
import { When } from "react-if";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "./Map.module.css";

const API_KEY = import.meta.env.VITE_API_KEY;

function Map(props) {
  return (
    <div className={styles.Map}>
      <When condition={props.latitude && props.longitude}>
        <Card className={styles.Card}style={{ width: "auto" }}>
          <Card.Img
            variant="top"
            src={`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${props.latitude},${props.longitude}&size=400x300&format=png`}
          />
          <Card.Body>
            <Card.Title style={{fontWeight: "bold"}}>{props.selectedCity}</Card.Title>
            <Card.Text>
              <p>
                LAT: {props.latitude} LONG: {props.longitude}
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </When>
    </div>
  );
}

export default Map;
