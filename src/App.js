import './App.css';
import { Component } from 'react';
import HookCounterTwo from './components/HookCounterTwo';

class App extends Component {
  render () {
    return (
      <div className="App">
        <HookCounterTwo/>
      </div>
    );
  }
}

export default App;
