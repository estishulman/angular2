








import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInServiceService {
  private apiUrl = 'http://localhost:3000/api/auth/login'; // כתובת ה-API שלך

  constructor(private http: HttpClient) { }

  // דוגמה לפונקציה לקבלת משתמשים
  // getUsers(): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/users`);
  // }

  // דוגמה לפונקציה להוספת משתמש
  // signIn(user: any): Observable<any> {
  //   console.log(SignInServiceService);
    
  //   return this.http.post(`${this.apiUrl}`, user);
  
    
  // }
  signIn(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, user).pipe(
      tap((response: any) => {
        // שמירה של הטוקן ב-Local Storage
        localStorage.setItem('token', response.token);
        localStorage.setItem('userId',response.userId);
      })
    );
  }
}