import './App.css';
import { Component } from 'react';
import MouseContainer from './components/MouseContainer';

class App extends Component {
  render () {
    return (
      <div className="App">
        <MouseContainer/>
      </div>
    );
  }
}

export default App;
