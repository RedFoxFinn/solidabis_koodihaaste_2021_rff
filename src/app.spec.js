import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import uuid from 'uuid';

import App from './app';

describe('App integration tests', () => {
  let dummy = false;
  const id = uuid;
  beforeEach(() => render(<App/>));
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('App renders', () => {
  });
});
