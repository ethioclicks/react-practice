import './App.css';
import { Private } from './Components/Auth/Private';
import { Profile } from './Components/Auth/Profile';
function App() {
  return (
    <div className="App">
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
}

export default App;
