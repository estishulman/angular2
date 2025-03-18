import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeesonService {

  constructor(private http: HttpClient) { }
    private getHeaders(): HttpHeaders {
      const token = localStorage.getItem('token');
      return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    }

  addLesson(courseId: string, lessonData: any): Observable<any> {
    return this.http.post(`http://localhost:3000/api/courses/${courseId}/lessons`, lessonData, { headers: this.getHeaders() });
  }
  deleteLesson(courseId:string,lessonId:string) :Observable<any> {
     return this.http.delete(`http://localhost:3000/api/courses/${courseId}/lessons/${lessonId}`, { headers: this.getHeaders() })
  }
  getLessonById(courseId:string,lessonId:string):Observable<any>{
    return this.http.get(`http://localhost:3000/api/courses/${courseId}/lessons/${lessonId}`, { headers: this.getHeaders() })
  }
  updateLesson(courseId:string,lessonId:string,lessonData:any): Observable<any>{
    return this.http.put(`http://localhost:3000/api/courses/${courseId}/lessons/${lessonId}`,lessonData, { headers: this.getHeaders() })
  }
}

