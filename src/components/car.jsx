import React, {useState} from 'react';

import {useCalculator} from '../controllers/calculator';
import language from '../tools/language';
import '../styles/components.css';

const consumption_gradient = 1.009;

const SpeedSelector = ({speed, setSpeed}) => {
  const handleSpeed = (event) => {
    event.preventDefault();
    setSpeed(event.target.value);
  };
  return <form className='selector' style={{marginLeft: '1em'}}>
    <label htmlFor='speedSelector' >Aseta auton nopeus (km/h)</label>
    <input id='speedSelector' type='number' min={0} max={320} value={speed} onChange={event => handleSpeed(event)} />
  </form>;
};

const TimeEstimate = ({speed}) => {
  const {state} = useCalculator();
  if (state.distance > 0 && speed > 0) {
    const roughEstimate = state.distance/speed;
    const shorthand = Math.round((roughEstimate+Number.EPSILON)*100)/100;
    const [hours, minutes] = shorthand.toString().split('.');
    return <section className='estimate'>
        <p>Matka-aika:</p>
        {!state.detailed
          ? <p>~ {hours ?? 0} h {Math.round(((parseFloat(`0.${minutes}`)*60)+Number.EPSILON)*1)/1 ?? 0} min</p>
          : <p>~ {shorthand ?? 0} h</p>}
      </section>;
  } else {
    return <section className='estimate'>
      <p>{language.checkLang() === 'en'
        ? 'Set speed and distance for travel time calculations.'
        : 'Aseta nopeus ja matkan pituus matka-ajan laskemiseksi.'}</p>
    </section>;
  }
};

const ConsumptionEstimate = ({baseConsumption, speed}) => {
  const {state} = useCalculator();
  let consumption = baseConsumption;
  if (speed > 1) {
    for (let s = 0; s < speed -1; s++) {
      consumption *= consumption_gradient;
    }
  }
  if (state.distance > 0 && speed > 0) {
    return <React.Fragment>
      <section className='estimate'>
        <p id='tripAverageConsumptionLabel'>Matkan keskikulutus: </p>
        <p id='tripAverageConsumption'>{speed > 1 && '~ '}{Math.round((consumption+Number.EPSILON)*100)/100} l / 100km</p>
      </section>
      <section className='estimate'>
        <p id='tripConsumptionLabel'>Matkan kokonaiskulutus: </p>
        <p id='tripConsumption'>~ {Math.round(((state.distance/100 * consumption)+Number.EPSILON)*100)/100} l</p>
      </section>
    </React.Fragment>;
  } else {
    return <section className='estimate' >
      <p>{language.checkLang() === 'en'
        ? 'Set speed and distance for fuel consumption calculations.'
        : 'Aseta nopeus ja matkan pituus polttoaineen kulutuksen laskemiseksi.'}</p>
    </section>;
  }
};

const CarData = ({name, consumption}) => {
  return <React.Fragment>
    <section className='data' style={{marginTop: '1em'}}>
      <p>Auto: </p>
      <p>{name}</p>
    </section>
    <section className='data'>
      <p>Ilmoitettu keskikulutus: </p>
      <p>{consumption} l / 100km</p>
    </section>
  </React.Fragment>;
};

const Car = (props) => {
  const {
    id,
    consumption,
    name
  } = props;
  const [speed, setSpeed] = useState(1);
  const lang = language.checkLang();

  return <article id={`${id}`} className='car'>
    <CarData name={lang === 'en' ? name[1] : name[0]} consumption={consumption} />
    <SpeedSelector setSpeed={setSpeed} speed={speed} />
    <TimeEstimate speed={speed} />
    <ConsumptionEstimate speed={speed} baseConsumption={consumption}/>
  </article>;
};

export default Car;