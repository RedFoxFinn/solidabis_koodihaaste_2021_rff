
const timeEstimate = (distance, speed) => {
  const finalEstimate = {
    shorthand: 0,
    shorthandUnits: 'h',
    hours: 0,
    minutes: 0
  };
  const roughEstimate = distance/speed;
  const estimates = roughEstimate.toString().split('.');
  if (roughEstimate >= 1) {
    finalEstimate.shorthand = Math.round((roughEstimate+Number.EPSILON)*10)/10;
  } else {
    finalEstimate.shorthand = Math.round(((roughEstimate*60)+Number.EPSILON)*10)/10;
    finalEstimate.shorthandUnits = 'min';
  }
  finalEstimate.hours = parseInt(`${estimates[0]}`);
  finalEstimate.minutes = Math.round(((parseFloat(`0.${estimates[1]}`)*60)+Number.EPSILON)*1)/1;
  console.table(finalEstimate);
  return finalEstimate;
};

export default {
  timeEstimate
};