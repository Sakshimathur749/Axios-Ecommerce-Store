import { api } from 'src/axiosinstance';
import { AxiosResponse } from 'axios';
import {  category ,HomeProduct } from 'src/types/type';
// import { useSearchParams } from 'react-router-dom';

export async function getfetchProducts(): Promise<HomeProduct[] | undefined> {
    try {
        // useSearchParams
        const res: AxiosResponse<HomeProduct[]> = await api.get('/products?limit=5');
        return res.data
    } catch (error) {
        console.log(error);
    }
}
export async function getallProducts():  Promise<HomeProduct[] | undefined> {
    try {
        const res: AxiosResponse<HomeProduct[]> = await api.get('/products');
        return res.data
    } catch (error) {
        console.log(error);
    }
}
export async function getallCategories():  Promise<category[] | undefined> {
    try {
        const res: AxiosResponse<category[]> = await api.get('/products/categories');
        return res.data
    } catch (error) {
        console.log(error);
    }
}