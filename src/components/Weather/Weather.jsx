import React from "react";
import WeatherDay from "./WeatherDay.jsx";

function Weather(props) {
console.log(props.weather)
  return (
    props.weather.map((value, idx) =>  <WeatherDay  key={idx} weather={value} />)
  ) }

export default Weather;
