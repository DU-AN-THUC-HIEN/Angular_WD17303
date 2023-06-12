import { IProduct } from "./product";

 export interface IBill {
    _id? : string,
    name?: string,
    total?: string,
    status?: string,
    address?: string,
    phone?: number,
    notes?: string,
    createdAt?: string,
    products: any
 }