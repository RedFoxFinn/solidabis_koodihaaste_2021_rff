import React from 'react';
import {render, screen} from '@testing-library/react';

import Header, {title} from './header';
import { isCompositeComponentWithType } from 'react-dom/test-utils';

const url = 'http://localhost:3000';
const name = 'RFF';
const lang = ['en', 'fi'];
const id = 'rff.test.header';

describe('Header test suite, fi', () => {
  let dummy = false;
  beforeEach(() => render(<Header id={id} authorName={name} authorUrl={url} lang={lang[1]} />));
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('Header renders', () => {
    const component = screen.queryByTestId(id);
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, Header);
  });
  it('Header renders title', () => {
    const component = screen.queryByTestId(id);
    expect(component.textContent).toMatch(title[1]);
  });
  it('Header renders authorUrl', () => {
    const link = screen.queryByTestId(`${id}.authorUrl`);
    expect(link).toBeTruthy();
    expect(link.textContent).toMatch(`RFF`);
    expect(link.textContent).toMatch(`[RFF]`);
    expect(link).toHaveAttribute('href',`${url}`);
  });
});
