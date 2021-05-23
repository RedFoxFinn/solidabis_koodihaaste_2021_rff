import uuid from 'uuid';
import language from './language';

describe('tool unit tests - language', () => {
  const randomLang = uuid;
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('checkLang', () => {
    let lang = language.checkLang();
    expect(lang).toMatch('fi');
    localStorage.setItem('rff.solidabisCC.lang', 'en');
    lang = language.checkLang();
    expect(lang).toMatch('en');
  });
  it('setLang - fi', () => {
    const setLangFi = language.setLang('fi');
    expect(setLangFi).toBeTruthy();
    expect(setLangFi).toMatch('fi');
  });
  it('setLang - en', () => {
    const setLangEn = language.setLang('en');
    expect(setLangEn).toBeTruthy();
    expect(setLangEn).toMatch('en');
  });
  it('setLang - any other', () => {
    const setLangOther = language.setLang(`${randomLang}`);
    expect(setLangOther).toBeTruthy();
    expect(setLangOther).toMatch('en');
  });
});