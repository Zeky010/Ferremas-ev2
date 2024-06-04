import { Link } from "react-router-dom";

export function Navigation() {
    return (

        <div>
            <h1>Ferremas App</h1>
            <Link to="/categorias">Create Category</Link>
            <Link to="/Productos">Create Productos</Link>
            <Link to="/precios">Create Precios</Link>
            <Link to="/paypal">pago</Link>
        </div>

    )
}


