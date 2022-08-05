import Product from "../model/product";
import instance from "./config";

export const List = () => {
    return instance.get('/products')
}

export const Read = (id: number) => {
    return instance.get(`/products/${id}`)
}
export const Update = (product: Product[]) => {
    return instance.put(`/products/${product.id}`, product)
}
export const AddProduct = (product: Product[]) => {
    return instance.post('/products', product)
}
export const Listbycate = (category: number) => {
    return instance.get(`/products?category=${category}`)
}