import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'http://localhost:8000/api/v1/erp/'
export const payPalPost = async ( ): Promise<any> => {
    try {
        const response = await axios.post(`${BASE_URL}create-payment/`);
        console.log('Transaction successful:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error completing the transaction:', error);
    }
}
