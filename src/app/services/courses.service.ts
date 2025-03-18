

// // // // import { Injectable } from '@angular/core';
// // // // import { HttpClient, HttpHeaders } from '@angular/common/http';
// // // // import { Observable } from 'rxjs';

// // // // @Injectable({
// // // //   providedIn: 'root'
// // // // })
// // // // export class CoursesService {

// // // //   constructor(private http: HttpClient) { }

// // // //   getCourses(): Observable<any> {
// // // //     const token = localStorage.getItem('token');
// // // //     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

// // // //     return this.http.get('http://localhost:3000/api/courses', { headers });
// // // //   }
// // // //   getCoursesById(){
// // // //     const token = localStorage.getItem('token');
// // // //     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

// // // //     return this.http.get(' http://localhost:3000/api/courses/:id ', { headers });
// // // //   }
// // // // }

// // // import { Injectable } from '@angular/core';
// // // import { HttpClient, HttpHeaders } from '@angular/common/http';
// // // import { Observable } from 'rxjs';

// // // @Injectable({
// // //   providedIn: 'root'
// // // })
// // // export class CoursesService {

// // //   constructor(private http: HttpClient) { }
// // //    token:string = localStorage.getItem('token');
// // //    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
// // //   getCourses(): Observable<any[]> { // נהיה על סוג מערך
// // //     //const token = localStorage.getItem('token');


// // //     return this.http.get<any[]>('http://localhost:3000/api/courses', { headers });
// // //   }

// // //   getCoursesById(id: number): Observable<any> {
// // //     //const token = localStorage.getItem('token');
// // //     //const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

// // //     return this.http.get(`http://localhost:3000/api/courses/${id}`, { headers }); // וודא שה-URL נכון
// // //   }
// // //   getCoursesByStudentId(id: number): Observable<any> {
// // //     //const token = localStorage.getItem('token');
// // //     //const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

// // //     return this.http.get(`http://localhost:3000/api/courses/student/${id}`, { headers }); // וודא שה-URL נכון
// // //   }
// // //   GetLessons(id: number): Observable<any> {

// // //    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

// // //     return this.http.get(`http://localhost:3000/api/courses/${id}/lessons`, { headers }); // וודא שה-URL נכון
// // //   }
// // //   AddCourseToSudentId(id:number):Observable<any>{
// // //     return this.http.post('http://localhost:3000/api/courses/:courseId/enroll',{headers});
// // //   }
// // // }






// // import { Injectable } from '@angular/core';
// // import { HttpClient, HttpHeaders } from '@angular/common/http';
// // import { Observable } from 'rxjs';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class CoursesService {

// //   constructor(private http: HttpClient) { }

// //   private getHeaders(): HttpHeaders {
// //     const token = localStorage.getItem('token');
// //     return new HttpHeaders().set('Authorization', `Bearer ${token}`);
// //   }

// //   getCourses(): Observable<any[]> {
// //     return this.http.get<any[]>('http://localhost:3000/api/courses', { headers: this.getHeaders() });
// //   }

// //   getCoursesById(id: number): Observable<any> {
// //     return this.http.get(`http://localhost:3000/api/courses/${id}`, { headers: this.getHeaders() });
// //   }

// //   getCoursesByStudentId(id: number): Observable<any> {
// //     return this.http.get(`http://localhost:3000/api/courses/student/${id}`, { headers: this.getHeaders() });
// //   }

// //   getLessons(id: number): Observable<any> {
// //     return this.http.get(`http://localhost:3000/api/courses/${id}/lessons`, { headers: this.getHeaders() });
// //   }

// //   addCourseToStudent(id: number): Observable<any> {
// //     return this.http.post(`http://localhost:3000/api/courses/${id}/enroll`, {}, { headers: this.getHeaders() });
// //   }

// // }



// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CoursesService {

//   constructor(private http: HttpClient) { }

//   private getHeaders(): HttpHeaders {
//     const token = localStorage.getItem('token');
//     return new HttpHeaders().set('Authorization', `Bearer ${token}`);
//   }

//   getCourses(): Observable<any[]> {
//     return this.http.get<any[]>('http://localhost:3000/api/courses', { headers: this.getHeaders() });
//   }


//   getCoursesByStudentId(id: number): Observable<any> {
//     return this.http.get(`http://localhost:3000/api/courses/student/${id}`, { headers: this.getHeaders() });
//   }

//   getLessons(id: number): Observable<any> {
//     return this.http.get(`http://localhost:3000/api/courses/${id}/lessons`, { headers: this.getHeaders() });
//   }

//   addCourseToStudent(id: number): Observable<any> {
//     return this.http.post(`http://localhost:3000/api/courses/${id}/enroll`, {}, { headers: this.getHeaders() });
//   }
// }





import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getCourses(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/courses', { headers: this.getHeaders() });
  }

  getCoursesById(id: number): Observable<any> {
    return this.http.get(`http://localhost:3000/api/courses/${id}`, { headers: this.getHeaders() });
  }

  getCoursesByStudentId(id: number): Observable<any> {
    return this.http.get(`http://localhost:3000/api/courses/student/${id}`, { headers: this.getHeaders() });
  }

  addCourseToStudent(courseId: number, userId: number): Observable<any> {
    return this.http.post(`http://localhost:3000/api/courses/${courseId}/enroll`, { userId }, { headers: this.getHeaders() });
  }

  removeCourseFromStudent(courseId: number, userId: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/courses/${courseId}/unenroll`, { body: { userId }, headers: this.getHeaders() });
  }

  getLessons(id: number): Observable<any> {
    return this.http.get(`http://localhost:3000/api/courses/${id}/lessons`, { headers: this.getHeaders() });
  }

  addCourse(course: any) {
    return this.http.post(`http://localhost:3000/api/courses`, course, { headers: this.getHeaders() });
  }

  deleteCourse(id: number) {
    return this.http.delete(`http://localhost:3000/api/courses/${id}`, { headers: this.getHeaders() })
  }
  
  // editingCourse(course: any,id:number) {
  //   return this.http.put(`http://localhost:3000/api/courses/${id}`, course, { headers: this.getHeaders() });
  // }
  
updateCourse(courseId: string, courseData: any) {
  return this.http.put(`http://localhost:3000/api/courses/${courseId}`, courseData, { headers: this.getHeaders() });
}
}