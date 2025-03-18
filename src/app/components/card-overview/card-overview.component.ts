

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CoursesService } from '../../services/courses.service';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

interface Course {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'card-overview',
  templateUrl: './card-overview.component.html',
  imports: [MatCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./card-overview.component.css'],
})
export class CardOverviewComponent implements OnInit {
  courses: Course[] = [];
  isFill: boolean = false;
  studentId: number = 0; // השתמש בסוג מספר
  myCourses: any[] = [];
  isExist: boolean = false;
 isTeacher:boolean=false;
  constructor(private router: Router, private coursesService: CoursesService,private usersService:UsersService) {
    console.log('ctor courses');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.loadCourses();
    this.getMyCourses();
    this.getDetailesOfUser()
  }

  getMyCourses() {
    this.studentId = Number(localStorage.getItem('userId')); // המרת ה-ID למספר
    console.log('studentId', this.studentId);
    
    this.coursesService.getCoursesByStudentId(this.studentId).subscribe({
      next: (response: any) => {
        this.myCourses = response;
        console.log('myCourses ok', this.myCourses);
      },
      error: (error: any) => {
        console.error('Error fetching courses', error);
      }
    });
  }

  loadCourses() {
    console.log('Loading courses...');

    this.coursesService.getCourses().subscribe({
      next: (response: Course[]) => {
        //this.lessons = response; // זה חכם יותר לאחסן את התגובה במשתנה אחר
        this.courses=response
        console.log('getCourses ok', this.courses);
        this.isFill = true; 
        this.router.navigate(['/courses']);  // נווט לדף הקורס

      },
      error: (error: any) => {
        console.error('Error get lessons', error);
      }

    });
  }

  navigateToCourseDetail(id: number) {
    console.log('navigateToCourseDetail with id:', id);
    this.router.navigate(['/course-detail', id]);
  }

  enjoyExist(courseId: number) {
    const studentId = Number(localStorage.getItem('userId'));
    const isExist = this.myCourses.some((c: any) => c.id === courseId);

    if (isExist) { // אם הסטודנט רשום לקורס
      const isConfirmed = confirm('Are you sure you want to leave?');
      if (isConfirmed) {
        this.coursesService.removeCourseFromStudent(courseId, studentId).subscribe({
          next: () => {
            console.log('Successfully left the course');
            this.loadCourses();
            this.getMyCourses(); // לטעון את הקורסים האישיים מחדש
          },
          error: (error) => {
            console.error('Error leaving course', error);
          }
        });
      }
    } else { // אם הסטודנט לא רשום לקורס
      const isConfirmed = confirm('Are you sure you want to join?');
      if (isConfirmed) {
        this.coursesService.addCourseToStudent(courseId, studentId).subscribe({
          next: () => {
            console.log('Successfully joined the course');
            this.loadCourses();
            this.getMyCourses(); // לטעון את הקורסים האישיים מחדש
          },
          error: (error) => {
            console.error('Error joining course', error);
          }
        });
      }
    }
  }
  
isEnrolled(courseId: number): boolean {
  return this.myCourses.some(c => c.id === courseId);
}
getDetailesOfUser() {
  const userId = Number(localStorage.getItem('userId')); // המרת ה-ID למספר
  this.usersService.getUserDetailes(userId).subscribe({
    next: (response: any) => {
      this.isTeacher = response.role === 'teacher';

      console.log(this.isTeacher);
      console.log(response);
    },
    error: (error: any) => {
      console.error('Error fetching user details', error);
    }
  });
}
DeleteCourse(id:number){
console.log('delete');
this.coursesService.deleteCourse(id).subscribe({
  next: (response: any) => {
        
  },
  error: (error: any) => {
    console.error('Error fetching delete course', error);
  }
});
}
AddCourse(){
console.log('add');
this.router.navigate(['/add-course']);
}
editingCourse(id:number)
{
  console.log('editing');
  this.router.navigate(['/edit-course',id]);
}
}
