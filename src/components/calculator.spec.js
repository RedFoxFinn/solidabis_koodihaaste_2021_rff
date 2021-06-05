import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';

import Calculator from './calculator';
import { CalculatorProvider } from '../controllers/calculator';
import { isCompositeComponentWithType } from 'react-dom/test-utils';

import {cars} from '../data/cars_test.json';

const id = `rff.dev.solidabisCC.test`;

describe('Calculator test suite', () => {
  let dummy = false;
  beforeEach(() => render(<CalculatorProvider><Calculator id={`${id}`} mobile={false} carData={cars} /></CalculatorProvider>));
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('Calculator renders', () => {
    const component = screen.queryByTestId(`${id}`);
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, Calculator);
  });
});