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
  it('navigator', () => {
    const gen = idGen(`${appId}`, 'navigator');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.app.navigator`);
  });
  it('home', () => {
    const gen = idGen(`${appId}`, 'home');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.app.home`);
  });
  it('about', () => {
    const gen = idGen(`${appId}`, 'about');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.app.about`);
  });
  it('navHome', () => {
    const gen = idGen(`${appId}`, 'navHome');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.navHome`);
  });
  it('navAbout', () => {
    const gen = idGen(`${appId}`, 'navAbout');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.navAbout`);
  });
  it('car', () => {
    const gen = idGen(`${appId}`, 'car', 5);
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.car.5`);
  });
  it('text', () => {
    const gen = idGen(`${appId}`, 'text', 1);
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.text.1`);
  });
  it('shortText', () => {
    const gen = idGen(`${appId}`, 'shortText', 2);
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.shortText.2`);
  });
  it('longText', () => {
    const gen = idGen(`${appId}`, 'longText', 3);
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.longText.3`);
  });
  it('headerText', () => {
    const gen = idGen(`${appId}`, 'headerText');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.headerText`);
  });
  it('detailText', () => {
    const gen = idGen(`${appId}`, 'detailText', 4);
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.detailText.4`);
  });
  it('packageText', () => {
    const gen = idGen(`${appId}`, 'packageText', 2);
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.packageText.2`);
  });
  it('selectors', () => {
    const gen = idGen(`${appId}`, 'selectors');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.selectors`);
  });
  it('languageSelector', () => {
    let gen = idGen(`${appId}`, 'languageSelector','en');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.language.en`);
    gen = idGen(`${appId}`, 'languageSelector','fi');
    expect(gen).toBeTruthy();
    expect(gen).toMatch(`${appId}.language.fi`);
  });
});