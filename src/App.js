import './App.css';
import React, { Component, useReducer } from 'react';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

export const CountContext = React.createContext()

const initalstate = 0
const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1 
        case 'decrement':
            return state - 1 
        case 'reset':
            return initalstate
        default:
            return state
    }
}
function App() {
  const [count, dispatch] = useReducer(reducer, initalstate)
  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
      <div className="App">
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
    </div>
    </CountContext.Provider>
  );
}

export default App;