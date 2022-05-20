import './App.css';
import { DomRef } from './Components/ref/DomRef';
import { MutableRef } from './Components/ref/MutableRef';
function App() {
  return (
    <div className="App">
      <DomRef/>
      <MutableRef/>
    </div>
  );
}

export default App;
