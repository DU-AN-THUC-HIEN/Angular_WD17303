import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBill } from 'src/app/interface/bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(
    private http: HttpClient
  ) { }
  getAllBill(): Observable<any> {
    return this.http.get<any>('https://node-bookselt.onrender.com/api/bill');
  }
  getBillId(id: string | number): Observable<any> {
    return this.http.get<any>(`https://node-bookselt.onrender.com/api/bill/${id}`);
  }
  addBill(bill: IBill): Observable<any> {
    return this.http.post<any>('https://node-bookselt.onrender.com/api/bill', bill);
  }
  updateBill(bill: IBill): Observable<IBill> {
    return this.http.patch<any>(`https://node-bookselt.onrender.com/api/bill/${bill._id}`, bill)
  }
  // removeBlog(id: number): Observable<IBlog> {
  //   return this.http.delete<IBlog>(`https://node-bookselt.onrender.com/api/blogs/${id}`)
  // }
}
