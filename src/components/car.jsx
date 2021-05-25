import React from 'react';

import {useCalculator, actions} from '../controllers/calculator';
import language from '../tools/language';

const consumption_gradient = 1.009;

const SpeedSelector = () => {
  const {dispatch, state} = useCalculator();
  const handleSpeed = (event) => {
    event.preventDefault();
    dispatch({type: actions[0], speed: event.target.value});
  };
  return <form>
    <label for='speedSelector' >Auton nopeus</label>
    <input id='speedSelector' type='number' min={0} max={320} value={state.speed} onChange={event => handleSpeed(event)} />
  </form>;
};

const TimeEstimate = () => {
  const {state} = useCalculator();
  const estimate = state.distance/state.speed;
  if (state.distance > 0 && state.speed > 0) {
    return <p>Matka-aika: ~ {estimate >= 1
      ? Math.round((estimate+Number.EPSILON)*10)/10
      : Math.round(((estimate*60)+Number.EPSILON)*10)/10} {estimate >= 1
        ? 'h'
        : 'min'}</p>;
  } else {
    return <p>{language.checkLang() === 'en'
      ? 'Set speed and distance for travel time calculations.'
      : 'Aseta nopeus ja matkan pituus matka-ajan laskemiseksi.'}</p>;
  }
};

const ConsumptionEstimate = ({baseConsumption}) => {
  const {state} = useCalculator();
  let consumption = baseConsumption;
  if (state.speed > 1) {
    for (let s = 0; s < state.speed -1; s++) {
      consumption *= consumption_gradient;
    }
  }
  if (state.distance > 0 && state.speed > 0) {
    return <React.Fragment>
      <p id='averageConsumption'>Keskikulutus: {state.speed > 1 && '~ '}{Math.round((consumption+Number.EPSILON)*100)/100} l / 100km</p>
      <p id='tripConsumption'>Matkan kulutus: ~ {Math.round(((state.distance/100 * consumption)+Number.EPSILON)*100)/100} l</p>
    </React.Fragment>;
  } else {
    return <p>{language.checkLang() === 'en'
      ? 'Set speed and distance for fuel consumption calculations.'
      : 'Aseta nopeus ja matkan pituus polttoaineen kulutuksen laskemiseksi.'}</p>;
  }
};

const Car = (props) => {
  const {
    carId,
    consumption,
    name
  } = props;

  return <article id={carId}>
    <p>Auto: {name}</p>
    <p>Kulutus: {consumption} l / 100km</p>
    <SpeedSelector/>
    <TimeEstimate/>
    <ConsumptionEstimate baseConsumption={consumption}/>
  </article>;
};

export default Car;