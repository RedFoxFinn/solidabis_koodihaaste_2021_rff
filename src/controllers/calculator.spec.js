import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react'

import {CalculatorProvider, useCalculator, actions} from './calculator';
import TestComponent from '../components/test/testComponent';
import { isCompositeComponentWithType } from 'react-dom/test-utils';

const testComponent = 'calculatorContextTest';
const testButtons = [
  'testComponentButtonSetDistance',
  'testComponentButtonResetDistance',
  'testComponentButtonSetDetailedEstimateON',
  'testComponentButtonSetDetailedEstimateOFF'
];

describe('calculator context tests', () => {
  let dummy = false;
  
  beforeEach(() => render(<CalculatorProvider><TestComponent id={`${testComponent}`} /></CalculatorProvider>));
  
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });

  it('TestComponent renders with CalculatorProvider', () => {
    const component = screen.queryByTestId('calculatorContextTest');
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, TestComponent);
  });
  it('TestComponent renders buttons', () => {
    const setDistance = screen.queryByTestId(testButtons[0]);
    const resetDistance = screen.queryByTestId(testButtons[1]);
    const setDetailedOn = screen.queryByTestId(testButtons[2]);
    const setDetailedOff = screen.queryByTestId(testButtons[3]);
    expect(setDistance).toBeTruthy();
    expect(resetDistance).toBeTruthy();
    expect(setDetailedOn).toBeTruthy();
    expect(setDetailedOff).toBeTruthy();
  });
  it('setting distance to the state', () => {
    const component = screen.queryByTestId(testComponent);
    const button = screen.queryByTestId(testButtons[0]);
    fireEvent.click(button);
    expect(component.textContent).toMatch('Distance:');
    expect(component.textContent).toMatch('100');
    expect(component.textContent).toMatch('Distance: 100');
  });
  it('resetting distance stored in the state', () => {
    const component = screen.queryByTestId(testComponent);
    const setButton = screen.queryByTestId(testButtons[0]);
    fireEvent.click(setButton);
    expect(component.textContent).toMatch('Distance:');
    expect(component.textContent).toMatch('100');
    expect(component.textContent).toMatch('Distance: 100');
    const resetButton = screen.queryByTestId(testButtons[1]);
    fireEvent.click(resetButton);
    expect(component.textContent).toMatch('Distance:');
    expect(component.textContent).toMatch('1');
    expect(component.textContent).toMatch('Distance: 1');
  });
  it('setting detailed estimates ON', () => {
    const component = screen.queryByTestId(testComponent);
    const setOnButton = screen.queryByTestId(testButtons[2]);
    fireEvent.click(setOnButton);
    expect(component.textContent).toMatch('Detailed Estimation');
    expect(component.textContent).toMatch('ON');
    expect(component.textContent).toMatch('Detailed Estimation ON');
  });
  it('setting detailed estimates OFF', () => {
    const component = screen.queryByTestId(testComponent);
    const setOnButton = screen.queryByTestId(testButtons[2]);
    fireEvent.click(setOnButton);
    expect(component.textContent).toMatch('Detailed Estimation');
    expect(component.textContent).toMatch('ON');
    expect(component.textContent).toMatch('Detailed Estimation ON');
    const setOffButton = screen.queryByTestId(testButtons[3]);
    fireEvent.click(setOffButton);
    expect(component.textContent).toMatch('Detailed Estimation');
    expect(component.textContent).toMatch('OFF');
    expect(component.textContent).toMatch('Detailed Estimation OFF');
  });
});
