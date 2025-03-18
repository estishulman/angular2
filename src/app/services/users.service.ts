import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  private getHeaders(): HttpHeaders {
      const token = localStorage.getItem('token');
      return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    }
  getUserDetailes(id:number): Observable<any> {
  return this.http.get(`http://localhost:3000/api/users/${id}`,{ headers: this.getHeaders() })
  }
  
}
