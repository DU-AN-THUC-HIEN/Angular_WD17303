import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private http: HttpClient
  ) { }

  AddImage(images: any): Observable<any> {
    return this.http.post(`http://localhost:8080/api/images/upload`, images, {
      headers: {
        "Content-Type": "application/form-data"
      },
    });
  }
}
