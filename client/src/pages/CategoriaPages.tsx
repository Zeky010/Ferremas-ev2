import React, { useState, useEffect } from 'react';
import { Categoria } from '../types/types';
import { getAllCategorias, createCategoria, updateCategoria, deleteCategoria } from '../api/Categoria.api';
import CategoriaForms from "../components/CategoriaForms";
import CategoriaList from '../components/CategoriaList';

const CategoriaPages: React.FC = () => {
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [editingCategoria, setEditingCategoria] = useState<Categoria | null>(null);

    useEffect(() => {
        fetchCategorias();
    }, []);

    const fetchCategorias = async () => {
        const data = await getAllCategorias();
        setCategorias(data);
    };

    const handleSave = async (categoria: Omit<Categoria, 'id'> | Categoria) => {
        if ('id' in categoria) {
            await updateCategoria(categoria);
        } else {
            await createCategoria(categoria);
        }
        fetchCategorias();
        setEditingCategoria(null);
    };

    const handleEdit = (categoria: Categoria) => {
        setEditingCategoria(categoria);
    };

    const handleDelete = async (id: number) => {
        await deleteCategoria(id);
        fetchCategorias();
    };

    return (
        <div>
            <h1>Categoria CRUD</h1>
            <CategoriaForms onSave={handleSave} categoria={editingCategoria || undefined} />
            <CategoriaList categorias={categorias} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};
export default CategoriaPages;