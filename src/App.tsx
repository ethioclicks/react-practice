import './App.css';
import { ThemeContextProvider } from './Components/context/ThemeContext';
import { Box } from './Components/context/Box'
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
