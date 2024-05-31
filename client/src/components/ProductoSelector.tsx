import React, { ChangeEvent } from 'react';
import { Producto } from '../types/types'

interface Props {
    productos: Producto[];
    onSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
}
 


const ProductoSelector : React.FC<Props> = ({productos, onSelect}) => {

    return(
        <div>
            <h2>Product List</h2>
            <select onChange={onSelect}>
                {productos.map((producto) => (
                    <option key={producto.id} value={producto.id}>
                        {producto.name} - {producto.marca}

                    </option>
                ))}
            </select>
        </div>

    );
}
 
export default ProductoSelector;
 