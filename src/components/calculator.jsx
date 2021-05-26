import React, {} from 'react';

import {useCalculator, actions} from '../controllers/calculator';
import Car from './car';
import '../styles/components.css';
import {cars} from '../data/cars.json';

const DistanceSelector = () => {
  const {dispatch, state} = useCalculator();
  const handleDistance = (event) => {
    event.preventDefault();
    dispatch({type: actions[0], distance: event.target.value});
  };
  return <form className='selector'>
    <label htmlFor='distanceSelector'>Aseta matkan pituus (km)</label>
    <input id='distanceSelector' type='number' min={0} max={666666} value={state.distance} onChange={event => handleDistance(event)}/>
  </form>;
};

const RenderCars = () => {
  return <section className='carList'>
    {cars.map(car => <Car key={`${car.id}.render`} id={`${car.id}`} consumption={car.consumption} name={car.name} />)}
  </section>
};

const Calculator = () => {
  return <React.Fragment>
    <DistanceSelector/>
    <RenderCars/>
  </React.Fragment>;
};

export default Calculator;