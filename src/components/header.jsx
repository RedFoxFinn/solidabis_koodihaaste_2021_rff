import React from 'react';

import wrapTextDev from '../tools/wrapTextDev';

export const title = 'Solidabiksen koodihaaste 2021';

function generateId(idFor, base) {
  switch (idFor) {
    case 'link':
      return `${base}.authorUrl`;
    case 'title':
      return `${base}.title`;
    default:
      break;
  }
}

const Header = (props) => {
  const {authorName, authorUrl, id} = props;
  return <section className='header' id={`${id}`} data-testid={`${id}`}>
    <p id={generateId('title', id)} >{title}</p>
    <a id={generateId('link', id)} data-testid={generateId('link', id)} href={authorUrl}>{wrapTextDev(authorName)}</a>
  </section>;
};

export default Header;