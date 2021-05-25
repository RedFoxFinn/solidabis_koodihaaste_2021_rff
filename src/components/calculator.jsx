import React, {} from 'react';

import {useCalculator, actions} from '../controllers/calculator';
import Car from './car';

const DistanceSelector = () => {
  const {dispatch, state} = useCalculator();
  const handleDistance = (event) => {
    event.preventDefault();
    dispatch({type: actions[1], distance: event.target.value});
  };
  return <form>
    <label for='distanceSelector'>Matkan pituus</label>
    <input id='distanceSelector' type='number' min={0} max={666666} value={state.distance} onChange={event => handleDistance(event)}/>
  </form>;
};

const Calculator = () => {
  return <React.Fragment>
    <DistanceSelector/>
    <Car carId={`calculator.car.default1`} consumption={3} name={`default1`} />
  </React.Fragment>;
};

export default Calculator;