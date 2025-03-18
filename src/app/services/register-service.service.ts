// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class RegisterServiceService {

//   constructor() { }
// }









import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  private apiUrl = 'http://localhost:3000/api/auth/register'; // כתובת ה-API שלך

  constructor(private http: HttpClient) { }

  // דוגמה לפונקציה לקבלת משתמשים
  // getUsers(): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/users`);
  // }

  // דוגמה לפונקציה להוספת משתמש
  register(user: any): Observable<any> {
    console.log(RegisterServiceService);
    
    return this.http.post(`${this.apiUrl}`, user);
  
    
  }
}