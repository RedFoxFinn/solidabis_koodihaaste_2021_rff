import React, {useState} from 'react';

import {useCalculator} from '../controllers/calculator';
import '../styles/components.css';
import idGen from '../tools/idGen';

// preset value for fuel consumption incremental gradient per km/h increment.

const consumption_gradient = 1.009;

// SpeedSelector sets and displays speed of a car. Works individually for each car.

const SpeedSelector = ({speed, setSpeed, formId}) => {
  const handleSpeed = (event) => {
    event.preventDefault();
    setSpeed(event.target.value);
  };
  const id = idGen(formId,'speedSelector');
  return <form className='selector' id={`${formId}`} data-testid={`${formId}`} style={{marginLeft: '1em'}}>
    <label htmlFor={`${id}`} >Aseta auton nopeus (km/h)</label>
    <input id={`${id}`} data-testid={`${id}`} type='number' min={0} max={320} value={speed} onChange={event => handleSpeed(event)} />
  </form>;
};

// TimeEstimate calculates estimated required time for trip by using distance set
// to the global state and speed set to the state of a individual car.
// Estimate given in hours or hours and minutes based on a option set in state (state.detailed).
// If speed (car) or distance (common) is set down to 0, text will notify user to set these values.

const TimeEstimate = ({speed, id}) => {
  const {state} = useCalculator();
  if (state.distance > 0 && speed > 0) {
    const roughEstimate = state.distance/speed;
    const shorthand = Math.round((roughEstimate+Number.EPSILON)*100)/100;
    const [hours, minutes] = shorthand.toString().split('.');
    return <section className='estimate' id={`${id}`} data-testid={`${id}`} >
        <p>Matka-aika:</p>
        {!state.detailed
          ? <p>~ {hours ?? 0} h {Math.round(((parseFloat(`0.${minutes}`)*60)+Number.EPSILON)*1)/1 ?? 0} min</p>
          : <p>~ {shorthand ?? 0} h</p>}
      </section>;
  } else {
    return <section className='estimate' id={`${id}`} data-testid={`${id}`} >
      <p>Aseta nopeus ja matkan pituus matka-ajan laskemiseksi.</p>
    </section>;
  }
};

// ConsumptionEstimate calculates estimated required fuel for trip by using distance set
// to the global state, speed set to the state of a individual car and base consumption of a individual car.
// Estimate given in 'l / 100km' for average consumption of a trip and 'l' for total consumption of a trip.
// If speed (car) or distance (common) is set down to 0, text will notify user to set these values.

const ConsumptionEstimate = ({baseConsumption, speed, id}) => {
  const {state} = useCalculator();
  let consumption = baseConsumption;
  if (speed > 1) {
    for (let s = 0; s < speed -1; s++) {
      consumption *= consumption_gradient;
    }
  }
  if (state.distance > 0 && speed > 0) {
    const averageConsumptionEstimateId = idGen(`${id}`, 'averageConsumption');
    const totalConsumptionEstimateId = idGen(`${id}`, 'totalConsumption');
    return <React.Fragment>
      <section className='estimate' id={`${averageConsumptionEstimateId}`} data-testid={`${averageConsumptionEstimateId}`} >
        <p id='tripAverageConsumptionLabel'>Matkan keskikulutus: </p>
        <p id='tripAverageConsumption'>{speed > 1 && '~ '}{Math.round((consumption+Number.EPSILON)*100)/100} l / 100km</p>
      </section>
      <section className='estimate' id={`${totalConsumptionEstimateId}`} data-testid={`${totalConsumptionEstimateId}`} >
        <p id='tripConsumptionLabel'>Matkan kokonaiskulutus: </p>
        <p id='tripConsumption'>~ {Math.round(((state.distance/100 * consumption)+Number.EPSILON)*100)/100} l</p>
      </section>
    </React.Fragment>;
  } else {
    return <section className='estimate' >
      <p>Aseta nopeus ja matkan pituus polttoaineen kulutuksen laskemiseksi.</p>
    </section>;
  }
};

// CarData renders base information of a individual car.
// These information are name and base consumption of a car.

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

// Car is the component rendered to show data of a individual car, travel time and fuel consumption estimates.
// It uses subcomponents CarData, SpeedSelector, TimeEstimate and ConsumptionEstimate.

const Car = (props) => {
  const {
    id,
    consumption,
    name,
    mobile
  } = props;
  const [speed, setSpeed] = useState(1);

  function getId() {
    return id;
  }
  function getConsumption() {
    return consumption;
  }
  function getName() {
    return name;
  }
  function getMobile() {
    return mobile;
  }

  return <article id={`${id}`} data-testid={`${id}`} className={mobile ? "car mobile" : "car desktop"}>
    <CarData name={name} consumption={consumption} />
    <SpeedSelector formId={`${idGen(`${id}`, 'speedForm')}`} setSpeed={setSpeed} speed={speed} />
    <TimeEstimate speed={speed} id={`${idGen(`${id}`, 'travelTimeEstimate')}`} />
    <ConsumptionEstimate speed={speed} baseConsumption={consumption} id={`${idGen(`${id}`, 'tripConsumption')}`} />
  </article>;
};

export default Car;