import './App.css';
import { Greet } from './Components/Greet';
import { Heading } from './Components/Heading';
import { Oscar } from './Components/Oscar';
import { Status } from './Components/Status';

function App() {
  return (
    <div className="App">
      <Status status='loading'/>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>
          Oscar goes to Leonardo Dicaprio!
        </Heading>
      </Oscar>
      <Greet name='Hello'  isLoggedIn={false} />
    </div>
  );
}

export default App;
