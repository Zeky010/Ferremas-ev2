import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Producto, Categoria } from '../types/types';
import { getAllCategorias } from "../api/Categoria.api";

interface Props {
    onSave: (producto: Omit<Producto, 'id'> | Producto) => void;
    producto?: Producto;
}

type FormValues = {
    codigo_producto: string;
    marca: string;
    codigo: string;
    name: string;
    cat: number;
    stock: number;
};

const ProductoForm: React.FC<Props> = ({ onSave, producto }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    useEffect(() => {
        const fetchCategorias = async () => {
            const data = await getAllCategorias();
            setCategorias(data);
        };
        fetchCategorias();
    }, []);

    useEffect(() => {
        if (producto) {
            reset(producto);
        } else {
            reset({ codigo_producto: '', marca: '', codigo: '', name: '', cat: 0, stock: 0 });
        }
    }, [producto, reset]);

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        onSave(producto ? { ...producto, ...data } : data);
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Product Code:</label>
                <input type="text" {...register('codigo_producto', { required: 'Product Code is required' })} />
                {errors.codigo_producto && <span>{errors.codigo_producto.message}</span>}
            </div>
            <div>
                <label>Brand:</label>
                <input type="text" {...register('marca', { required: 'Brand is required' })} />
                {errors.marca && <span>{errors.marca.message}</span>}
            </div>
            <div>
                <label>Code:</label>
                <input type="text" {...register('codigo', { required: 'Code is required' })} />
                {errors.codigo && <span>{errors.codigo.message}</span>}
            </div>
            <div>
                <label>Name:</label>
                <input type="text" {...register('name', { required: 'Name is required' })} />
                {errors.name && <span>{errors.name.message}</span>}
            </div>
            <div>
                <label>Categoria: </label>
                <select {...register('cat', { required: 'Category is required' })}>
                    <option value="">Select a category</option>
                    {categorias.map((categoria) => (
                        <option key={categoria.id} value={categoria.id}>
                            {categoria.name}
                        </option>
                    ))}
                </select>
                {errors.cat && <span>{errors.cat.message}</span>}
            </div>
            <div>
                <label>Stock:</label>
                <input type="number" {...register('stock', { required: 'Stock is required' })} />
                {errors.stock && <span>{errors.stock.message}</span>}
            </div>
            <button type="submit">Save</button>
        </form>
    );
};

export default ProductoForm;