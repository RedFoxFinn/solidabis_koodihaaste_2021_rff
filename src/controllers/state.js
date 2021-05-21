
import React, {createContext, useReducer} from 'react';

export const actionTypes = ['SWITCH_LANG', 'SWITCH_THEME'];

const generateInitialState = () => {
  return {
    theme: 'light',
    language: 'en'
  };
};

const applicationReducer = (state = generateInitialState(), action) => {
  switch (action.type) {
    case actionTypes[0]: return {
      ...state, 
      language: action.language
    };
    case actionTypes[1]: return {
      ...state,
      theme: action.theme
    };
    default: return state;
  }
};

const Store = ({children}) => {
  const [state, dispatch] = useReducer(applicationReducer);

  return <Context.Provider value={[state, dispatch]}>
    {children}
  </Context.Provider>
};

export const Context = createContext(generateInitialState());
export default Store;