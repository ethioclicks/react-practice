import './App.css';
import { Test } from './Components/polymorphic/Test';
function App() {
  return (
    <div className="App">
      <Test as='h1' size='lg'>Heading</Test>
      <Test as='p' size='md'>Paragraph</Test>
      <Test as='label' htmlFor='someId' size='sm'color='secondary'>Label</Test>
    </div>
  );
}

export default App;
