import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://node-bookselt.onrender.com/api/products');
  }
  getProductById(id: string | number): Observable<IProduct> {
    return this.http.get<IProduct>(`https://node-bookselt.onrender.com/api/products/${id}`);
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>('https://node-bookselt.onrender.com/api/products', product);
  }
  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.patch<IProduct>(`https://node-bookselt.onrender.com/api/products/${product._id}`, product)
  }
  removeProduct(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(`https://node-bookselt.onrender.com/api/products/${id}`)
  }
  searchProducts(searchValue: string): Observable<IProduct[]> {
    const url = `https://node-bookselt.onrender.com/api/products/?q=${searchValue}`;
    return this.http.get<IProduct[]>(url);
  }
  getAllProducts(limit: number, page: number): Observable<IProduct[]> {
    const url = `https://node-bookselt.onrender.com/api/products?_limit=${limit}&_page=${page}`;
    return this.http.get<IProduct[]>(url);
  }
}
