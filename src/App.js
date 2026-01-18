import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route, HashRouter} from 'react-router-dom';
import Navigation from './MemoryRouter/Navigation';
import About from './BrowserRouter/About';
import Home from './BrowserRouter/Home'
import NavigationPage from './UseParams/NavigationPage';
import ProductsNavigationPage from './UseSearchParams/ProductsNavigationPage';

function App() {
  return (
    // <BrowserRouter>
    // <Routes>
    //   <Route path='/' element={<Home/>}/>
    //   <Route path='/about' element={<About/>}/>
    // </Routes>
    // </BrowserRouter>
    // <Navigation/>
    // <NavigationPage/>
    <ProductsNavigationPage/>
  );
}

export default App;
