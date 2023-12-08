import React from "react";
import { When } from "react-if";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./Weather.module.css";
import WeatherDay from "./WeatherDay.jsx";

function Weather(props) {
console.log(props.weather)
  return (
    props.weather.map((value, idx) => {
      return (

        <WeatherDay  key={idx} weather={value}/>
      )
    })
  )
  // console.log(props.weather[0].date);
  // return props.weather.map((value, idx) => {
  //   return (
  //     <Card key={idx}className={styles.Card} style={{ width: "18rem" }}>
  //       <Card.Body>
  //         <ul>
  //           <li style={{ fontWeight: "bold", listStyle: "none" }}>
  //             Date: {value.date}
  //           </li>
  //           <li>High: {value.highTemp}F</li>
  //           <li>Low: {value.lowTemp}F</li>
  //         </ul>
  //       </Card.Body>
  //     </Card>
    ;
  }

export default Weather;
