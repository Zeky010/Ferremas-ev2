import {BrowserRouter, Routes, Route} from 'react-router-dom'
import  CategoriasPage  from "./pages/CategoriaPages";
import ProductosPage from './pages/ProductosPage';
import PrecioProductoPage from './pages/PrecioProductoPage';
import { Navigation } from "./components/Navigation"



function App() {
  return(
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/'/>
        <Route path='/categorias' element={<CategoriasPage/>} />
        <Route path='/productos' element={<ProductosPage/>}/>
        <Route path='/precios' element={<PrecioProductoPage/>}/>
      </Routes>  
    
    </BrowserRouter>
  );
    
}

export default App