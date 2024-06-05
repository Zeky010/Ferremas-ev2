import { Link } from "react-router-dom";

export function Navigation() {
    return (

        <div>
            <h1>Ferremas App</h1>
            <Link to="/categorias">Create Category</Link><br/>
            <Link to="/Productos">Create Productos</Link><br/>
            <Link to="/precios">Create Precios</Link><br/>
            <Link to="/paypal">pago</Link>
        </div>

    )
}
