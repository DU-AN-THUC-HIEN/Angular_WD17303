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
    return this.http.post<IUser>('http://localhost:8080/api/signup', user);
  }
  signIn(user: IUser): Observable<IUser> {
    return this.http.post<IUser>('http://localhost:8080/api/signin', user);
  }
}
