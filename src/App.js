import './App.css';
import React, { Component } from 'react';
import ComponentC from './components/ComponentC';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App(props) {
  return (
    <div>
      <UserContext.Provider value={'Hello'}>
        <ChannelContext.Provider value={'World'}>
          <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;