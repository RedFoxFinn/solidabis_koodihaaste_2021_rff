import React from 'react';
import uuid from 'uuid';
import '../styles/components.css';

function setNewCar(id = uuid, name = 'userCustomCar', consumption = 10) {}

const CarForm = () => {
  return <form >
    <section className='selector' >
      <label htmlFor='customCarId' ></label>
      <input id='customCarId' />
    </section>
    <section className='selector' >
      <label htmlFor='customCarName' ></label>
      <input id='customCarName' />
    </section>
    <section className='selector' >
      <label htmlFor='customCarConsumption' ></label>
      <input id='customCarConsumption' />
    </section>
  </form>
};

export default CarForm;