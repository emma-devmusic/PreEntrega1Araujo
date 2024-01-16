import { productsMock } from "../mock/asyncMock";

export const getProductById = (id) => {
    let result = productsMock.filter( e => e.id == id);
    return result[0]; 
}

export const getProductsByCategory = (category) => 
productsMock.filter( e => e.category.toLowerCase() == category.toLowerCase())