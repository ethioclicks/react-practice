import './App.css';
import { Button } from './Components/Button';
import { Input } from './Components/Input';

function App() {
  return (
    <div className="App">
      <Button handleclick={(event, id) => {
        console.log('Button clicked', event, id)
      }}/>
      <Input value='' handleChange={(event) => console.log(event)}/>
    </div>
  );
}

export default App;
