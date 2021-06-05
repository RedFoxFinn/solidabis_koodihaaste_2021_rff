import React, {} from 'react';

import {useCalculator, actions} from '../controllers/calculator';
import Car from './car';
import '../styles/components.css';
import idGen from '../tools/idGen';

// DistanceSelector sets desired distance to global state provided by React context.

const DistanceSelector = ({id}) => {
  const {dispatch, state} = useCalculator();
  const handleDistance = (event) => {
    event.preventDefault();
    dispatch({type: actions[0], distance: event.target.value});
  };
  return <form id={`${id}`} data-testid={`${id}`} className='selector' style={{width: '18em'}} >
    <label htmlFor={`${id}.input`} >Aseta matkan pituus (km)</label>
    <input id={`${id}.input`} data-testid={`${id}.input`} type='number' min={0} max={666666} value={state.distance} onChange={event => handleDistance(event)} style={{width: '6em'}} />
  </form>;
};

// RenderCars generates list of <Car/> components to rendering based on json-data.
// Goal is to add functionality so that user could add their own car to application.
// At that point RenderCars would also add to list these cars for rendering.

const RenderCars = ({mobile, baseId, cars}) => {
  return <section id={`${baseId}`} data-testid={`${baseId}`} className={mobile ? 'carListMobile' : 'carList'}>
    {cars.map(car => {
      const id = idGen(baseId, 'car',car.id);
      return <Car key={`${id}`} id={`${id}`} consumption={car.consumption} name={car.name} />;
    })}
  </section>
};

// Calculator is the main view of the application. In later stages of development the idea is to add more views.

const Calculator = (props) => {
  const {id, mobile, carData} = props;
  return <section id={`${id}`} data-testid={`${id}`} style={{display: 'flex', flexDirection: 'column'}}>
    {process.env.NODE_ENV !== 'production' && <p>{mobile ? '[mobile]' : '[desktop]'}</p>}
    <DistanceSelector id={`${idGen(`${id}`, 'distanceSelector')}`} />
    <RenderCars mobile={mobile} baseId={`${id}`} cars={carData} />
  </section>;
};

export default Calculator;