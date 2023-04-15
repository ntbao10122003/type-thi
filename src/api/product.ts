import axios from "axios"
import { IProduct , updataform } from "../models"

const ins = axios.create({
  baseURL: ' http://localhost:3000',
})
export default ins;

export const getPro = () => {
  return ins.get('/products');
}


export const getProId = (id:String) => {
  return ins.get(`/products/${id}`);
}

export const addPro = (data : IProduct) => {
  return ins.post(`/products` , data);
}

export const  udPro = (id:string , data:updataform) => {
  return ins.put(`/products/${id}` , data);
}

export const dlPro = (id : string) => {
  return ins.delete(`/products/${id}`);
}