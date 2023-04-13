import instance from ".";
import { IProduct ,updateForm } from "../models";
export const getProducts = () => {
    return instance.get('/products');
}
export const getProductById = (id: string) => {
    return instance.get(`/products/${id}`);
  };
export const addProduct = (product: IProduct) => {
    return instance.post("/products", product, );
  };
export const updateProduct = (id: string,body:updateForm) => {
  const uri = "/products/" + id
  return instance.put(uri, body)
  };
export const deleteProducts = (id:string) => {
    return instance.delete(`/products/${id}`,)
}