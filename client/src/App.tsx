import {BrowserRouter, Routes, Route} from 'react-router-dom'
import  CategoriasPage  from "./pages/CategoriaPages";
import ProductosPage from './pages/ProductosPage';
import PrecioProductoPage from './pages/PrecioProductoPage';
import PaypalPage from './pages/PayPalPage';
import { Navigation } from "./components/Navigation"
import  FunnyImg  from './components/FunnyImg';


function App() {
  return(
    <BrowserRouter>
      <div>
        <FunnyImg/>
      </div>
      <Navigation/>
      <Routes>
        <Route path='/'/>
        <Route path='/categorias' element={<CategoriasPage/>} />
        <Route path='/productos' element={<ProductosPage/>}/>
        <Route path='/precios' element={<PrecioProductoPage/>}/>
        <Route path='/paypal' element={<PaypalPage/>}/>
      </Routes>  
    
    </BrowserRouter>
  );
    
}

export default App