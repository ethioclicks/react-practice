import './App.css';
import { LoggedIn } from './Components/state/LoggedIn';
import { User } from './Components/state/User';
function App() {
  return (
    <div className="App">
      <LoggedIn/>
      <User />
    </div>
  );
}

export default App;
