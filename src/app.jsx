import React, {useState, useEffect} from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './components/header';
import language from './tools/language';
import {CalculatorProvider} from './controllers/calculator';
import packageinfo from '../package.json';
import './styles/components.css';
import './styles/global.css';
import Navigation from './components/navigation';
import Calculator from './components/calculator';
import useWindowDimensions from './hooks/windowDimensionsHook';

const App = (props) => {
  const { height, width } = useWindowDimensions();
  const [lang, setLang] = useState();
  useEffect(() => {
    const selection = language.checkLang();
    if (language.languages().includes(selection)) {
      setLang(selection);
    } else {
      setLang('fi');
    }
  },[]);

  return <article style={{height: height, width: width, marginLeft: '1em', marginRight: '1em'}}>
    <Router id={`${props.id}`}>
      <CalculatorProvider>
        <Header language={lang} authorName={packageinfo.author.name} authorUrl={packageinfo.author.url} />
        <Navigation language={lang}/>
        <Switch>
          <Route exact path='/' children={<React.Fragment><Calculator/></React.Fragment>} />
          <Route path='/task' children={<React.Fragment><h1>task</h1></React.Fragment>} />
        </Switch>
      </CalculatorProvider>
    </Router>
  </article>;
};

export default App;