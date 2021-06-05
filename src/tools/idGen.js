
/*
  Author:       RedFoxFinn - Antti Aarnio
  Project:      solidabis_koodihaaste_2021_rff
  File:         ./src/tools/idGen.js
  Description:  Tool that generates id's for the components or elements using parent id
*/

const idGen = (parentId, idFor, ...rest) => {
  switch (idFor) {
    case 'app': return `${parentId}.app`;
    case 'header': return `${parentId}.app.header`;
    case 'footer': return `${parentId}.app.footer`;
    case 'car': return `${parentId}.car.${rest[0]}`;
    case 'speedForm': return `${parentId}.speedForm`;
    case 'speedSelector': return `${parentId}.speedSelector`;
    case 'travelTimeEstimate': return `${parentId}.travelTimeEstimate`;
    case 'tripConsumption': return `${parentId}.tripConsumption`;
    case 'averageConsumption': return `${parentId}.averageConsumption`;
    case 'totalConsumption': return `${parentId}.totalConsumption`;
    case 'detailText': return `${parentId}.detailText.${rest[0]}`;
    default: return `${parentId}.default`;
  }
};

export default idGen;