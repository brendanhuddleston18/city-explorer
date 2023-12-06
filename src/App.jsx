import { useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header.jsx";
import CityForm from "./components/Form/CityForm.jsx";
import Map from "./components/Map/Map.jsx";
import Error from "./components/Error/Error.jsx";
import "./App.css";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [selectedCity, setSelectedCity] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const [weather, setWeather] = useState([]);

  // console.log(selectedCity);
  function changeCity(userCity) {
    grabCityData(userCity);
  }

   async function grabCityData(cityName) {
    let url = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${cityName}&format=json`;
    try {
      let response = await axios.get(url);
      // console.log(response.data[0].display_name);
      console.log(response.data);
      setSelectedCity(response.data[0].display_name);
      setLatitude(response.data[0].lat);
      setLongitude(response.data[0].lon);
      grabWeatherData(response.data[0].lat,response.data[0].lon);
    } catch (error) {
      setShow(true);
      let errorMessage = error.message;
      setError(errorMessage)
      console.error(errorMessage);
    }
    // grabWeatherData(latitude, longitude)
  }

  async function grabWeatherData(latitude, longitude) {
    try {
      console.log(latitude, longitude);
      let response = await axios.get('http://localhost:3000/' , {params: {"latitude": latitude, "longitude": longitude}});
      console.log(response)
    } catch {
      console.log("Didn't Work")
    }
  }



  return (
    <>
      <div className="body">
      <Header />
        <CityForm
          latitude={latitude}
          longitude={longitude}
          selectedCity={selectedCity}
          changeCity={changeCity}
          grabWeatherData={grabWeatherData}
        />
        <Map
          selectedCity={selectedCity}
          latitude={latitude}
          longitude={longitude}
        />
        <Error show={show} errorMessage={error}/>
      </div>
    </>
  );
}

export default App;
