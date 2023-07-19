import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBlog } from 'src/app/interface/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<IBlog[]> {
    return this.http.get<IBlog[]>('https://node-bookselt.onrender.com/api/blogs');
  }
  getBlogId(id: string | number): Observable<IBlog> {
    return this.http.get<IBlog>(`https://node-bookselt.onrender.com/api/blogs/${id}`);
  }
  addBlog(blog: IBlog): Observable<IBlog> {
    return this.http.post<IBlog>('https://node-bookselt.onrender.com/api/blogs', blog);
  }
  updateBlog(blog: IBlog): Observable<IBlog> {
    return this.http.patch<IBlog>(`https://node-bookselt.onrender.com/api/blogs/${blog._id}`, blog)
  }
  removeBlog(id: number): Observable<IBlog> {
    return this.http.delete<IBlog>(`https://node-bookselt.onrender.com/api/blogs/${id}`)
  }
}
