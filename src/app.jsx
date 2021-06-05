import React, {useState, useEffect} from 'react';

import Header from './components/header';
import {CalculatorProvider} from './controllers/calculator';
import packageinfo from '../package.json';
import './styles/components.css';
import './styles/global.css';
import Calculator from './components/calculator';
import useWindowDimensions from './hooks/windowDimensionsHook';
import idGen from './tools/idGen';
import {cars} from './data/cars.json';

const App = (props) => {
  const { height, width } = useWindowDimensions();

  function isMobile() {
    return width >= 720 ? false : true;
  }

  return <article className='app' style={{height: height, maxWidth: width}}>
    <CalculatorProvider>
      <Header id={`${idGen(props.id, 'header')}`} authorName={packageinfo.author.name} authorUrl={packageinfo.author.url} />
      <Calculator mobile={isMobile()} carData={cars} />
    </CalculatorProvider>
  </article>;
};

export default App;