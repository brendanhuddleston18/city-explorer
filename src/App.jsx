import { useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header.jsx";
import CityForm from "./components/Form/CityForm.jsx";
import Map from "./components/Map/Map.jsx";
import Weather from "./components/Weather/Weather.jsx";
import Error from "./components/Error/Error.jsx";
import Movies from './components/Movies/Movies.jsx';
import "./App.css";

const API_KEY = import.meta.env.VITE_API_KEY;
const SERVER = import.meta.env.VITE_SERVER_SIDE;
const SERVER_MOVIES = import.meta.env.VITE_SERVER_MOVIES;

function App() {
  const [selectedCity, setSelectedCity] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const [weather, setWeather] = useState([]);
  const [movies, setMovies] = useState([]);

  // console.log(selectedCity);
  function changeCity(userCity) {
    grabCityData(userCity);
  }

   async function grabCityData(cityName) {
    let url = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${cityName}&format=json`;
    try {
      let response = await axios.get(url);
      // console.log(response.data[0].display_name);
      // console.log(response.data);
      setSelectedCity(response.data[0].display_name);
      setLatitude(response.data[0].lat);
      setLongitude(response.data[0].lon);
      grabWeatherData(response.data[0].lat,response.data[0].lon);
      let movieCity = (response.data[0].display_name.split(' '));
      grabMovieData(movieCity[0].slice(0, -1));
      // console.log(response.data)
    } catch (error) {
      setShow(true);
      let errorMessage = error.message;
      setError(errorMessage)
      console.error(errorMessage);
    }
    // grabWeatherData(latitude, longitude)
  }
  
  console.log(weather);
  // let forecastArray = []
  async function grabWeatherData(latitude, longitude) {
    try {
      console.log(latitude, longitude);
      let response = await axios.get( SERVER, {params: {"latitude": latitude, "longitude": longitude}});
      const forecast = response.data;
      setWeather(response.data.Forecast);
      console.log(response.data.Forecast);
      console.log("forecast:", forecast);
    } catch {
      console.log(error.message);
    }
  }

  async function grabMovieData(cityName) {
    try {
     let response = await axios.get(SERVER_MOVIES, {params: {"city": cityName}});
      setMovies(response.data);
      console.log(response.data);
    
    } catch {
      console.log(error.message)
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
          <h2 className="forecastHeading">Your 7 Day Forecast</h2>
        <div className="weatherSection">
        <Weather weather={weather} selectedCity={selectedCity}/>
        </div>
        <h2 className="movieHeading" style={{display: `${show}`}}>Your Top 20 Movies</h2>
        <div className="movieSection" >
       <Movies movies ={movies} />

        </div>
        
        <Error show={show} errorMessage={error}/>
      </div>
    </>
  );
}

export default App;
