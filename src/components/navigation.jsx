import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/components.css';

const Navigation = (props) => {
  const {language} = props;
  return <nav className='navigation'>
    <Link to='/'>{language === 'en' ? 'home' : 'etusivu'}</Link>
    <Link to='/task'>{language === 'en' ? 'task' : 'tehtävä'}</Link>
  </nav>;
};

export default Navigation;