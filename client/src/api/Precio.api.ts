import axios from 'axios';
import { Precio } from "../types/types";

// Define the base URL for the API
const   BASE_URL = 'http://localhost:8000/api/v1/erp/precios/',
        URL_PRODUCTO_PRECIOS = 'http://localhost:8000/api/v1/erp/precios-productos/';


export const getPrecios = async (): Promise<Precio[]> => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching Productos:', error);
		throw error;
    }

};

export const getPreciosProducto = async (id: number) => {
    try {
        const response = await axios.get(`${URL_PRODUCTO_PRECIOS}${id}/precios/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Productos:', error);
		throw error;
    }

};

export const createPrecios = async (producto: Omit<Precio, 'id'>): Promise<Precio> => {
    const response = await axios.post(BASE_URL, producto);
    return response.data;
};

export const updatePrecios = async (Precio: Precio): Promise<Precio> => {
    const response = await axios.put(`${BASE_URL}${Precio.id}/`, Precio);
    return response.data;
};

export const deletePrecios = async (id: number): Promise<void> => {
    await axios.delete(`${BASE_URL}${id}/`);
};