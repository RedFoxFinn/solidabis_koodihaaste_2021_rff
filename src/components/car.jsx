import React from 'react';

const consumption_gradient = 1.009;

const Car = (props) => {
  const {
    carId,
    consumption: baseConsumption,
    name
  } = props;

  return <article id={carId}>
    <p>{name}</p>
  </article>;
};

export default Car;