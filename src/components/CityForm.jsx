import {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

function CityForm(props) {

  const[typedCity, setTypedCity] = useState('')

  function handleCityChange(e){
    setTypedCity(e.target.value);
    console.log(typedCity);
  }

  function submitCity(){
    props.changeCity(typedCity);
  }

  return (
    <>
      <Form.Control
        type="location"
        id="inputCity"
        aria-describedby="location"
        placeholder="Enter a City"
        onChange={handleCityChange}
      />
      
      <Button variant="primary" onClick={submitCity}>Explore!</Button>{' '}
      <h2>{props.selectedCity}</h2>
    </>
  );
}

export default CityForm;
