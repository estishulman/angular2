
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { UsersService } from '../../services/users.service';
import { LeesonService } from '../../services/leeson.service';
import { TruncatePipe } from '../../models/truncate.pipe'
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'], // יש לתקן לstyleUrls
  imports:[TruncatePipe]
})
export class CourseDetailComponent implements OnInit {
  detailes: any; // או מספר/סוג שמתאים לקורס
  courseId: any;
  lessons: any;
  isTeacher: boolean = false;
  // isMember:boolean;
  constructor(
    private router: Router,
    private route: ActivatedRoute, // הוספת ActivatedRoute
    private coursesService: CoursesService,
    private usersService: UsersService,
    private lessonService:LeesonService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseId = params['id']; // קבלת ה-id מה-params
      this.on(); // קרא למתודה on כדי להביא את הפרטים של הקורס
      this.on2();
      this.getDetailesOfUser();
    });
  }

  on() {
    this.coursesService.getCoursesById(this.courseId).subscribe({
      next: (response: any) => {
        this.detailes = response; // זה חכם יותר לאחסן את התגובה במשתנה אחר
        console.log('getCourses ok', this.courseId);
        console.log(this.detailes);


      },
      error: (error: any) => {
        console.error('Error fetching courses', error);
      }

    });
  }
  on2() {
    this.coursesService.getLessons(this.courseId).subscribe({
      next: (response: any) => {
        this.lessons = response; // זה חכם יותר לאחסן את התגובה במשתנה אחר
        console.log('getLessons ok', this.courseId);
        console.log(this.lessons);


      },
      error: (error: any) => {
        console.error('Error fetching courses', error);
      }

    });
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
  DeleteLesson(lessonId:string) {
    console.log('delete');
    this.lessonService.deleteLesson(this.courseId,lessonId).subscribe({
      next: (response: any) => {
        //this.lessons = response; // זה חכם יותר לאחסן את התגובה במשתנה אחר
        console.log('getLessons ok', this.courseId);
        console.log(this.lessons);
        this.router.navigate(['/courses']);  // נווט לדף הקורס

      },
      error: (error: any) => {
        console.error('Error delete lesson', error);
      }

    });
  }
  AddLesson() {
    console.log('add');
    console.log(this.courseId);
    this.router.navigate(['/create-leeson',this.courseId]);

  }
  editingLesson(lessonId:string) {
    console.log('editing');
    //this.router.navigate(['/edit-lesson',lessonId]);
    this.router.navigate(['/edit-lesson', this.courseId, lessonId]);
  }
}

