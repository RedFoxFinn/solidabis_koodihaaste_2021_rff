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
  return <form id={`distanceSelector.form`} className='selector' style={{width: '18em'}} >
    <label htmlFor='distanceSelector.label'>Aseta matkan pituus (km)</label>
    <input id='distanceSelector.input' type='number' min={0} max={666666} value={state.distance} onChange={event => handleDistance(event)} style={{width: '6em'}} />
  </form>;
};

const RenderCars = ({mobile}) => {
  return <section className={mobile ? 'carListMobile' : 'carList'}>
    {cars.map(car => <Car key={`${car.id}.render`} id={`${car.id}`} consumption={car.consumption} name={car.name} />)}
  </section>
};

const Calculator = (props) => {
  return <section style={{display: 'flex', flexDirection: 'column'}}>
    <p>[mobile]</p>
    <DistanceSelector/>
    <RenderCars mobile={props.mobile}/>
  </section>;
};

export default Calculator;