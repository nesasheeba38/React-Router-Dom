import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route, HashRouter} from 'react-router-dom';
import Navigation from './MemoryRouter/Navigation';
import About from './BrowserRouter/About';
import Home from './BrowserRouter/Home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
    // <Navigation/>
  );
}

export default App;
