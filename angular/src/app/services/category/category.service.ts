import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/interface/category';
const Token = JSON.parse(localStorage.getItem('user')!) || [];

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {

  }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>('http://localhost:8080/api/categories');
  }
  getCategoryById(id: string | number): Observable<ICategory> {
    return this.http.get<ICategory>(`http://localhost:8080/api/categories/${id}`);
  }
  addCategory(category: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>('http://localhost:8080/api/categories', category, {
      headers: {
        Authorization: `Bearer ${Token.accessToken}`
      }
    });
  }
  updateCategory(category: ICategory): Observable<ICategory> {
    return this.http.patch<ICategory>(`http://localhost:8080/api/categories/${category._id}`, category, {
      headers: {
        Authorization: `Bearer ${Token.accessToken}`
      }
    })
  }
  removeCategory(id: number): Observable<ICategory> {
    return this.http.delete<ICategory>(`http://localhost:8080/api/categories/${id}`, {
      headers: {
        Authorization: `Bearer ${Token.accessToken}`
      }
    })
  }
}
