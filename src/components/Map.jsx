import { useState } from "react";
// import {If, Then, Else, When} from 'react-if';

const API_KEY = import.meta.env.VITE_API_KEY;

function Map(props) {
  <figure>
    <img
      src={`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${props.latitude},${props.longitude}&size=400x300&format=png`}
      width="500"
    />
  </figure>;
}

export default Map;
