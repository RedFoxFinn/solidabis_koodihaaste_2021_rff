
const wrapTextDev = (text) => {
  const env = process.env.NODE_ENV;
  return env === 'production' ? text : `[${text}]`;
};

export default wrapTextDev;