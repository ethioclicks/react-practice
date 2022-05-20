import './App.css';
import { RandomNumbers } from './Components/restriction/RandomNumbers';
function App() {
  return (
    <div className="App">
      <RandomNumbers  value={10} isNegative={true} />
    </div>
  );
}

export default App;
