/* eslint-disable import/no-anonymous-default-export */

/*
  Author:       RedFoxFinn - Antti Aarnio
  Project:      Solidabis koodihaaste 2021
  File:         ./src/tools/language.js
  Description:  Tool that sets or gets language by using localStorage. Checks language validity with checker tools
*/

import checker from './checker';

const languages = () => {
  return ['en', 'fi'];
};

const checkLang = () => {
  const lang = localStorage.getItem('rff.solidabisCC.lang');
  if (lang && checker.langIsValid(lang)) {
    return lang;
  } else {
    localStorage.setItem('rff.solidabisCC.lang', 'fi');
    return localStorage.getItem('rff.solidabisCC.lang');
  }
};

const setLang = (lang) => {
  if (checker.langIsValid(lang)) {
    localStorage.setItem('rff.solidabisCC.lang',lang);
    return lang;
  } else {
    let setLang = localStorage.getItem('rff.solidabisCC.lang');
    if (!setLang || !checker.langIsValid(setLang)) {
      localStorage.setItem('rff.solidabisCC.lang', 'fi');
      setLang = localStorage.getItem('rff.solidabisCC.lang');
    }
    return setLang;
  }
}

export default {checkLang, setLang, languages};