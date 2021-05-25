import React, {useContext, useReducer} from 'react';

const actions = [
  'SET_SPEED',
  'SET_DISTANCE',
  'RESET_SPEED',
  'RESET_DISTANCE',
  'RESET_ALL'
];

const createInitialState = () => {
  return {
    distance: 1,
    speed: 1
  };
};

const CalculatorContext = React.createContext();

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case actions[0]: return {...state, speed: action.speed};
    case actions[1]: return {...state, distance: action.distance};
    case actions[2]: return {...state, speed: 0};
    case actions[3]: return {...state, distance: 0};
    case actions[4]: return createInitialState();
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