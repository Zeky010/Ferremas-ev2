import React from 'react';
import { Producto } from '../types/types';

interface Props {
    productos: Producto[];
    onEdit: (producto: Producto) => void;
    onDelete: (id: number) => void;
}

const ProductList: React.FC<Props> = ({ productos, onEdit, onDelete }) => {
    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {productos.map((producto) => (
                    <li key={producto.id}>
                        {producto.name} - {producto.marca}
                        <button onClick={() => onEdit(producto)}>Edit</button>
                        <button onClick={() => onDelete(producto.id!)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;