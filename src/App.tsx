import './App.css';
import { CustomButton } from './Components/html/Button';
import { CustomInput } from './Components/html/Input';
import { Toast } from './Components/templateliterals/Toast';
function App() {
  return (
    <div className="App">
      <CustomButton variant='primary' onClick={() => console.log('clicked')}>
          Primary Button
      </CustomButton>
      <CustomInput/>
    </div>
  );
}

export default App;
