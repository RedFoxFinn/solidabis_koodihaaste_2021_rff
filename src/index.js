import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import idGen from './tools/idGen';
import packageInfo from '../package.json';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App id={idGen(packageInfo.appId, 'app')}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
