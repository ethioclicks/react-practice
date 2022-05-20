import './App.css';
import { CustomButton } from './Components/html/Button';
import { CustomComponent } from './Components/html/CustomComponent';
import { CustomInput } from './Components/html/Input';
import { Toast } from './Components/templateliterals/Toast';
function App() {
  return (
    <div className="App">
      <CustomComponent name='hello' isLoggedIn={false}/>
    </div>
  );
}

export default App;
