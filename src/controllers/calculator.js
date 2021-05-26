import React, {useContext, useReducer} from 'react';

const actions = [
  'SET_DISTANCE',
  'RESET_DISTANCE',
  'RESET_ALL',
  'SET_DETAILED_TIME_ESTIMATE'
];

const createInitialState = () => {
  return {
    distance: 1,
    detailed: false
  };
};

const CalculatorContext = React.createContext();

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case actions[0]: return {...state, distance: action.distance};
    case actions[1]: return {...state, distance: 1};
    case actions[2]: return createInitialState();
    case actions[3]: return {...state, detailed: action.setDetailed};
    default: return state;
  }
};

const CalculatorProvider = ({children}) => {
  const [state, dispatch] = useReducer(calculatorReducer, createInitialState());
  const value = {state, dispatch};
  return <CalculatorContext.Provider value={value} >{children}</CalculatorContext.Provider>
};

const useCalculator = () => {
  const context = useContext(CalculatorContext);
  if (context === undefined) {
    throw new Error('useCalculator must be used within a CalculatorProvider');
  } return context;
};

export {CalculatorProvider, useCalculator, actions}