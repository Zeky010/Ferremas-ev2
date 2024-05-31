import axios from 'axios';
import { Categoria } from "../types/types";

// Define the base URL for the API
const BASE_URL = 'http://localhost:8000/api/v1/erp/categorias/';

export const getAllCategorias = async (): Promise<Categoria[]> => {
	try {
		const response = await axios.get<Categoria[]>(BASE_URL);
		return response.data;
	} catch (error) {
		console.error('Error fetching categories:', error);
		throw error;
	}
};

  export const createCategoria = async (categoria: Omit<Categoria, 'id'>): Promise<Categoria> => {
    const response = await axios.post(BASE_URL, categoria);
    return response.data;
};
export const updateCategoria = async (categoria: Categoria): Promise<Categoria> => {
    const response = await axios.put(`${BASE_URL}${categoria.id}/`, categoria);

    return response.data;
};

export const deleteCategoria = async (id: number): Promise<void> => {
    await axios.delete(`${BASE_URL}${id}/`);
};