import './App.css';
import { UserContextProvider } from './Components/context/UserContext';
import { User } from './Components/context/User';
function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
