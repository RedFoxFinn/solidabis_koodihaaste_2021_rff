
import uuid from 'uuid';
import checker from './checker';

describe('tool unit tests - checker', () => {
  const randomLang = uuid;
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('isValidLang - fi', () => {
    const isValid = checker.langIsValid('fi');
    expect(isValid).toBe(true);
  });
  it('isValidLang - en', () => {
    const isValid = checker.langIsValid('en');
    expect(isValid).toBe(true);
  });
  it('isValidLang - sv', () => {
    const isValid = checker.langIsValid('sv');
    expect(isValid).toBe(false);
  });
  it('isValidLang - randomLang', () => {
    const isValid = checker.langIsValid(`${randomLang}`);
    expect(isValid).toBe(false);
  });
});