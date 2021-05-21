/* eslint-disable import/no-anonymous-default-export */

/*
  Author:       RedFoxFinn - Antti Aarnio
  Project:      Solidabis koodihaaste 2021
  File:         ./src/tools/checker.js
  Description:  Tool that does various checks for other tools or components
*/

const OPT = Object.freeze({
  LANG: ['en','fi'],
  THEME: ['dark', 'light']
});

const langIsValid = (lang) => {
  return OPT.LANG.includes(lang);
};

const themeIsValid = (theme) => {
  return OPT.THEME.includes(theme);
};

export default {
  langIsValid, themeIsValid
};