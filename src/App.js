import './App.css';
import { Component } from 'react';
import IntervalHookCounter from './components/IntervalHookCounter';

class App extends Component {
  render () {
    return (
      <div className="App">
        <IntervalHookCounter/>
      </div>
    );
  }
}

export default App;
