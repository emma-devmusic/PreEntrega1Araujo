import { productsMock } from "../mock/asyncMock";

export const getProducts = () => new Promise( (res, rej) => {
    setTimeout(() => {
        res(productsMock)    
    }, 1000);
})

export const getProductById = (id) => new Promise( (res, rej) => {
    setTimeout(() => {
        let result = productsMock.find( e => e.id == id)
        res(result)    
    }, 1000);
})

export const getProductsByCategory = (category) => new Promise( (res, rej) => {
    setTimeout(() => {
        let filter = productsMock.filter( e => e.category.toLowerCase() == category.toLowerCase())
        res(filter)
    }, 1000);
})