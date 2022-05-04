import './App.css';
import { Component } from 'react';
import HookCounter from './components/HookCounter';

class App extends Component {
  render () {
    return (
      <div className="App">
        <HookCounter/>
      </div>
    );
  }
}

export default App;
