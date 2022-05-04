import './App.css';
import { Component } from 'react';
import DataFetching from './components/DataFetching';

class App extends Component {
  render () {
    return (
      <div className="App">
        <DataFetching/>
      </div>
    );
  }
}

export default App;
