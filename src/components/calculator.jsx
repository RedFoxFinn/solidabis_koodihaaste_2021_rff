import React, {} from 'react';

import {useCalculator, actions} from '../controllers/calculator';
import Car from './car';
import '../styles/components.css';
import {cars} from '../data/cars.json';
import idGen from '../tools/idGen';

// 

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

const RenderCars = ({mobile, baseId}) => {
  return <section className={mobile ? 'carListMobile' : 'carList'}>
    {cars.map(car => {
      const id = idGen(baseId, 'car',car.id);
      return <Car key={`${id}`} id={`${id}`} consumption={car.consumption} name={car.name} />;
    })}
  </section>
};

const Calculator = (props) => {
  const {id, mobile} = props;
  return <section style={{display: 'flex', flexDirection: 'column'}}>
    {process.env.NODE_ENV !== 'production' && <p>{mobile ? '[mobile]' : '[desktop]'}</p>}
    <DistanceSelector/>
    <RenderCars mobile={mobile} baseId={`${id}`}/>
  </section>;
};

export default Calculator;