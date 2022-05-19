import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './Components/Greet';
import { Person } from './Components/Person';
import { PersonList } from './Components/PersonList';

function App() {
  const PersonName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Princess',
      last: 'Diana',
    },
  ]
  return (
    <div className="App">
      <Greet name='Hello' messageCount= {20} isLoggedIn= {true} />
      <Person name= {PersonName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
