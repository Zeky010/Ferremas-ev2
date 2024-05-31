import axios from 'axios';
import { ProductoPrecios } from "../types/types";

// Define the base URL for the API
const BASE_URL = 'http://localhost:8000/api/v1/erp/categorias/';

export const getProductoPrecios = async (): Promise<ProductoPrecios[]> => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching Productos:', error);
		throw error;
    }

};

export const createProductoPrecios = async (producto: Omit<ProductoPrecios, 'id'>): Promise<ProductoPrecios> => {
    const response = await axios.post(BASE_URL, producto);
    return response.data;
};

export const updateProductoPrecios = async (ProductoPrecios: ProductoPrecios): Promise<ProductoPrecios> => {
    const response = await axios.put(`${BASE_URL}/${ProductoPrecios.id}/`, ProductoPrecios);
    return response.data;
};

export const deleteProductoPrecios = async (id: number): Promise<void> => {
    await axios.delete(`${BASE_URL}/${id}/`);
};