import React, {useReducer} from 'react';
import {
  HashRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';

import './styles/components.css';

const Header = (props) => <article className='header'>
  <p>{
    props.lang === 'en'
      ? `Solidabis code challenge 2021`
      : `Solidabiksen koodihaaste 2021`
  }</p>
  <p>{props.lang === 'en' ? 'Author: ' : 'Tekijä: '}{
    process.env.NODE_ENV === 'production'
      ? `RedFoxFinn`
      : `[RedFoxFinn]`
  }</p>
</article>;

const App = (props) => {
  const [lang, setLang] = useReducer('fi');
  return <Router>
    <Header lang={lang}/>
    <Switch></Switch>
  </Router>
};

export default App;