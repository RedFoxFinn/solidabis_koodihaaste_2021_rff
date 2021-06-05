import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';

import Car from './car';
import { CalculatorProvider } from '../controllers/calculator';
import { isCompositeComponentWithType } from 'react-dom/test-utils';

const consumption_gradient = 1.009
const consumption = 5;
const name = 'test car 1';
const id = 'rff.test.testcar';

function consumptionCalc(type, speed) {
  let consumptionCalculation = consumption;
  for (let s = 0; s < speed -1; s++) {
    consumptionCalculation *= consumption_gradient;
  }
  return type === 'average'
    ? Math.round((consumptionCalculation+Number.EPSILON)*100)/100
    : Math.round(((1/100 * consumptionCalculation)+Number.EPSILON)*100)/100;
}

describe('Car test suite', () => {
  let dummy = false;
  beforeEach(() => render(<CalculatorProvider><Car id={`${id}`} name={name} consumption={consumption} mobile={false} /></CalculatorProvider>));
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('Car renders', () => {
    const component = screen.queryByTestId(`${id}`);
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, Car);
    expect(component.textContent).toMatch('Auto:');
    expect(component.textContent).toMatch('Ilmoitettu keskikulutus:');
    expect(component.textContent).toMatch('Aseta auton nopeus (km/h)');
    expect(component.textContent).toMatch('Matka-aika:');
    expect(component.textContent).toMatch('Matkan keskikulutus:');
    expect(component.textContent).toMatch('Matkan kokonaiskulutus:');
  });
  it('Car renders name', () => {
    const component = screen.queryByTestId(`${id}`);
    expect(component.textContent).toMatch(`${name}`);
  });
  it('Car renders average consumption', () => {
    const component = screen.queryByTestId(`${id}`);
    expect(component.textContent).toMatch(`${consumption}`);
  });
  it('Car renders speed selector', () => {
    const form = screen.getByTestId(`${id}.speedForm`);
    expect(form).toBeTruthy();
    expect(form.textContent).toMatch('Aseta auton nopeus (km/h)');
    expect(screen.getByTestId(`${id}.speedForm.speedSelector`)).toBeTruthy();
  });
  it('Car: Speed selector default value', () => {
    const field = screen.getByTestId(`${id}.speedForm.speedSelector`);
    expect(field).toHaveValue(1);
  });
  it('Car: Speed selector value setting', () => {
    const field = screen.getByTestId(`${id}.speedForm.speedSelector`);
    expect(field).toHaveValue(1);
    fireEvent.change(field, { target: { value: 100 }});
    expect(field).toHaveValue(100);
  });
  it('Car renders travel time estimate', () => {
    const estimate = screen.getByTestId(`${id}.travelTimeEstimate`);
    expect(estimate).toBeTruthy();
    expect(estimate.textContent).toMatch(`Matka-aika:`);
    expect(estimate.textContent).toMatch(`~`);
    expect(estimate.textContent).toMatch(`1 h`);
    expect(estimate.textContent).toMatch(`0 min`);
    expect(estimate.textContent).toMatch(`~ 1 h 0 min`);
  });
  it('Car renders trip average consumption', () => {
    const estimate = screen.getByTestId(`${id}.tripConsumption.averageConsumption`);
    expect(estimate).toBeTruthy();
    expect(estimate.textContent).toMatch(`Matkan keskikulutus:`);
    expect(estimate.textContent).toMatch(`5 l / 100km`);
  });
  it('Car renders trip total consumption', () => {
    const estimate = screen.getByTestId(`${id}.tripConsumption.totalConsumption`);
    expect(estimate).toBeTruthy();
    expect(estimate.textContent).toMatch(`Matkan kokonaiskulutus:`);
    expect(estimate.textContent).toMatch(`~`);
    expect(estimate.textContent).toMatch(`0.05 l`);
    expect(estimate.textContent).toMatch(`~ 0.05 l`);
  });
  it('Car: component integration test', () => {
    const component = screen.queryByTestId(`${id}`);
    expect(component).toBeTruthy();
    const speedSelector = screen.getByTestId(`${id}.speedForm.speedSelector`);
    fireEvent.change(speedSelector, { target: { value: 13 }});
    expect(speedSelector).toHaveValue(13);
    expect(screen.getByTestId(`${id}.travelTimeEstimate`).textContent).toMatch(`~ 0 h 5 min`);
    expect(screen.getByTestId(`${id}.tripConsumption.averageConsumption`).textContent).toMatch(`~ ${consumptionCalc('average', 13)} l / 100km`);
    expect(screen.getByTestId(`${id}.tripConsumption.totalConsumption`).textContent).toMatch(`~ ${consumptionCalc('total', 13)} l`);
  });
});