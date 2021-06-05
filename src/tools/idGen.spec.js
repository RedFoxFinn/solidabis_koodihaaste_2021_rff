import uuid from 'uuid';
import idGen from './idGen';

describe('tool unit tests - idGen', () => {
  let dummy = false;
  const appId = uuid;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('default', () => {
    const gen = idGen(`${appId}`,'default');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.default`);
  });
  it('app', () => {
    const gen = idGen(`${appId}`, 'app');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.app`);
  });
  it('header', () => {
    const gen = idGen(`${appId}`, 'header');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.app.header`);
  });
  it('footer', () => {
    const gen = idGen(`${appId}`, 'footer');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.app.footer`);
  });
  it('car', () => {
    const gen = idGen(`${appId}`, 'car', 5);
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.car.5`);
  });
  it('speedForm', () => {
    const gen = idGen(`${appId}`,'speedForm');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.speedForm`);
  });
  it('speedSelector', () => {
    const gen = idGen(`${appId}`,'speedSelector');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.speedSelector`);
  });
  it('travelTimeEstimate', () => {
    const gen = idGen(`${appId}`, 'travelTimeEstimate');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.travelTimeEstimate`);
  });
  it('tripConsumption', () => {
    const gen = idGen(`${appId}`, 'tripConsumption');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.tripConsumption`);
  });
  it('averageConsumption', () => {
    const gen = idGen(`${appId}`, 'averageConsumption');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.averageConsumption`);
  });
  it('totalConsumption', () => {
    const gen = idGen(`${appId}`, 'totalConsumption');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.totalConsumption`);
  });
  it('detailText', () => {
    const gen = idGen(`${appId}`, 'detailText', 4);
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.detailText.4`);
  });
});