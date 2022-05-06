import './App.css';
import React, { Component } from 'react';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';

function App() {
  return (
    <div className="App">
      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}
      <CounterThree/>
    </div>
  );
}

export default App;