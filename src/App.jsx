import { useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header.jsx";
import CityForm from "./components/Form/CityForm.jsx";
import Map from "./components/Map/Map.jsx";
import "./App.css";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [selectedCity, setSelectedCity] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  // console.log(selectedCity);
  function changeCity(userCity) {
    grabCityData(userCity);
  }

  async function grabCityData(cityName) {
    let url = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${cityName}&format=json`;
    try {
      let response = await axios.get(url);
      // console.log(response.data[0].display_name);
      setSelectedCity(response.data[0].display_name);
      setLatitude(response.data[0].lat);
      setLongitude(response.data[0].lon);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <Header />
      <div className="body">
        <CityForm
          latitude={latitude}
          longitude={longitude}
          selectedCity={selectedCity}
          changeCity={changeCity}
        />
        <Map
          selectedCity={selectedCity}
          latitude={latitude}
          longitude={longitude}
        />
      </div>
    </>
  );
}

export default App;
