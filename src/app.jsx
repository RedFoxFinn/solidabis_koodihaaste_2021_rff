import React, {useState, useEffect} from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './components/header';
import {CalculatorProvider} from './controllers/calculator';
import packageinfo from '../package.json';
import './styles/components.css';
import './styles/global.css';
import Calculator from './components/calculator';
import useWindowDimensions from './hooks/windowDimensionsHook';
import idGen from './tools/idGen';

const App = (props) => {
  const { height, width } = useWindowDimensions();

  function isMobile() {
    return width >= 720 ? false : true;
  }

  return <article className='app' style={{height: height, maxWidth: width}}>
    <Router id={`${props.id}`}>
      <CalculatorProvider>
        <Header id={`${idGen(props.id, 'header')}`} authorName={packageinfo.author.name} authorUrl={packageinfo.author.url} />
        <Calculator mobile={isMobile()}/>
      </CalculatorProvider>
    </Router>
  </article>;
};

export default App;