import React from 'react';

import {useCalculator, actions} from '../../controllers/calculator';

// This component has only one purpose:
//  to be used for the testing of the code in the controllers/calculator.js -file

const TestComponent = (props) => {
  const {state, dispatch} = useCalculator();

  function setDistanceTo(value) {
    dispatch({type: actions[0], distance: value});
  }
  function resetDistance() {
    dispatch({type: actions[1]});
  }
  function setDetailedEstimate(detailed) {
    dispatch({type: actions[3], setDetailed: detailed});
  }

  const Distance = () => {
    return <p>Distance: {state.distance}</p>
  };

  const Estimation = () => {
    return <p>Detailed Estimation {state.detailed ? 'ON' : 'OFF'}</p>
  };

  const Buttons = () => {
    return <form>
      <input data-testid='testComponentButtonSetDistance' type='button' onClick={() => setDistanceTo(100)} value='Set distance to 100 (km)'/>
      <input data-testid='testComponentButtonResetDistance' type='button' onClick={() => resetDistance()} value='Reset distance to 1 (km)'/>
      <input data-testid='testComponentButtonSetDetailedEstimateON' type='button' onClick={() => setDetailedEstimate(true)} value='Set detailed estimation ON'/>
      <input data-testid='testComponentButtonSetDetailedEstimateOFF' type='button' onClick={() => setDetailedEstimate(false)} value='Set detailed estimation OFF'/>
    </form>
  };

  return <article data-testid={`${props.id}`} style={{display: 'flex', flexDirection: 'column'}} >
    <Distance/>
    <Estimation/>
    <Buttons/>
  </article>
};

export default TestComponent;