export interface HomeProduct {
    id:number ;  
    title: string;
    price: number;
    category: string;
    image: string;
    rating: number;
}
export interface Category{
    category: string;
    id:number;   
    title: string;
    price: number;
}
export interface Merged{
    category:Category;
    products: HomeProduct[];
}
