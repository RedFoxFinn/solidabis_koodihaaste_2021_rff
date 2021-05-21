import React from 'react';

import wrapTextDev from '../tools/wrapTextDev';

const title = ['Solidabis code challenge 2021', 'Solidabiksen koodihaaste 2021'];

const Header = (props) => {
  const {authorName, authorUrl, language} = props;
  return <section className='header'>
    <p>{language === 'en' ? title[0] : title[1]}</p>
    <a href={authorUrl}>{wrapTextDev(authorName)}</a>
  </section>;
};

export default Header;