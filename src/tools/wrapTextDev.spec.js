
import wrapTextDev from './wrapTextDev';

describe('tool unit tests - wrapTextDev', () => {
  let dummy = false;
  afterAll(() => process.env.NODE_ENV = 'test')
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('test', () => {
    process.env.NODE_ENV = 'test';
    const text = wrapTextDev('test?');
    expect(text).toBeTruthy();
    expect(text).toMatch('[test?]');
  });
  it('dev', () => {
    process.env.NODE_ENV = 'development';
    const text = wrapTextDev('dev?');
    expect(text).toBeTruthy();
    expect(text).toMatch('[dev?]');
  });
  it('prod', () => {
    process.env.NODE_ENV = 'production';
    const text = wrapTextDev('prod?');
    expect(text).toBeTruthy();
    expect(text).toMatch('prod?');
  });
});