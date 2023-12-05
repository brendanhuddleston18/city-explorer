import {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import styles from './CityForm.module.css';

function CityForm(props) {

  const[typedCity, setTypedCity] = useState('')

  function handleCityChange(e){
    setTypedCity(e.target.value);
    console.log(typedCity);
  }

  function submitCity(e){
    // e.prevent.default();
    props.changeCity(typedCity);
  }

  return (
    <>
      <Form.Control
      className={styles.Form}
        type="location"
        id="inputCity"
        aria-describedby="location"
        placeholder="Enter a City"
        onChange={handleCityChange}
      />
      
      <Button className={styles.Button}variant="primary" onClick={submitCity}>Explore!</Button>{' '}
      {/* <h2>{props.selectedCity}</h2> */}
      
    </>
  );
}

export default CityForm;
