import React, { useState, useEffect } from 'react';
import { Producto } from '../types/types';
import { getProductos, createProducto, updateProducto, deleteProducto } from '../api/Producto.api';
import ProductForm from '../components/ProductoForm';
import ProductList from '../components/ProductoList'; 

const ProductosPage: React.FC = () => {
    const [productos, setProductos] = useState<Producto[]>([]);
    const [editingProducto, setEditingProducto] = useState<Producto | null>(null);

    useEffect(() => {
        fetchProductos();
    }, []);

    const fetchProductos = async () => {
        const data = await getProductos();
        setProductos(data);
    };

    const handleSave = async (producto: Omit<Producto, 'id'> | Producto) => {
        if ('id' in producto) {
            await updateProducto(producto);
        } else {
            await createProducto(producto);
        }
        fetchProductos();
        setEditingProducto(null);
    };

    const handleEdit = (producto: Producto) => {
        setEditingProducto(producto);
    };

    const handleDelete = async (id: number) => {
        await deleteProducto(id);
        fetchProductos();
    };

    return (
        <div>
            <h1>Product CRUD</h1>
            <ProductForm onSave={handleSave} producto={editingProducto || undefined} />
            <ProductList productos={productos} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default ProductosPage;