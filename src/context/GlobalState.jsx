import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//initial state for
const initialState = {
  transactions: [
    { id: 1, text: 'flower', amount: -20 },
    { id: 2, text: 'salary', amount: 200 },
    { id: 3, text: 'book', amount: -20 },
    { id: 4, text: 'photo', amount: 210 },
  ]
};

export const GlobalContext = createContext(initialState) 

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    //actions

    function deleteTransaction(id) {
      dispatch({ 

        type: 'DELETE_TRANSACTION', 
        payload: id
      });
    }

    return (<GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction}}>
{children}
    </GlobalContext.Provider>);
}
