import { Producto } from "../types/types";
import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/v1/erp/productos/';

export const getProductos = async (): Promise<Producto[]> => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching Productos:', error);
		throw error;
    }

};

export const createProducto = async (producto: Omit<Producto, 'id'>): Promise<Producto> => {
    const response = await axios.post(BASE_URL, producto);
    return response.data;
};

export const updateProducto = async (producto: Producto): Promise<Producto> => {
    const response = await axios.put(`${BASE_URL}/${producto.id}/`, producto);
    return response.data;
};

export const deleteProducto = async (id: number): Promise<void> => {
    await axios.delete(`${BASE_URL}/${id}/`);
};