import { AxiosResponse } from "axios";
import { api } from "src/axiosinstance";
import { HomeProduct } from "src/types/type";

export default class ApiServices {
    /**
     * fetchaAllProducts
     */
    public static async fetchaAllProducts() {
        try {
            return (await api.get('/products?limit=5')).data
        } catch (error) {
            console.log(error);
        }
    }

    
}
