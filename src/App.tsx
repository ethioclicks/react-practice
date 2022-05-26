import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './Components/Pages/About';
import { Contact } from './Components/Pages/Contact';
import { ErrorPage } from './Components/Pages/ErrorPage';
import { Footer } from './Components/Pages/Footer';
import { Home } from './Components/Pages/Home';
import { NavBar } from './Components/Pages/NavBar';
function App() {
  return (
    <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
