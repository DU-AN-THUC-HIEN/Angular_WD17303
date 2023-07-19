import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interface/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  signUp(user: IUser): Observable<IUser> {
    return this.http.post<IUser>('https://node-bookselt.onrender.com/api/signup', user);
  }
  signIn(user: IUser): Observable<IUser> {
    return this.http.post<IUser>('https://node-bookselt.onrender.com/api/signin', user);
  }
  getUser(): Observable<IUser[]> {
    return this.http.get<IUser[]>('https://node-bookselt.onrender.com/api/user');
  }
  getUserById(id: string | number): Observable<IUser> {
    return this.http.get<IUser>(`https://node-bookselt.onrender.com/api/user/${id}`);
  }
  removeUser(id: number): Observable<IUser> {
    return this.http.delete<IUser>(`https://node-bookselt.onrender.com/api/user/${id}`)
  }
  updateUser(user: IUser): Observable<IUser> {
    return this.http.patch<IUser>(`https://node-bookselt.onrender.com/api/user/${user._id}`, user)
  }
}
