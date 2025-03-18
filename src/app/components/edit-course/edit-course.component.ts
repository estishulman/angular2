// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-edit-course',
//   imports: [],
//   templateUrl: './edit-course.component.html',
//   styleUrl: './edit-course.component.css'
// })
// export class EditCourseComponent {

// }

import { ChangeDetectionStrategy, Component,OnInit} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
//import { Router } from '@angular/router';
//import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
//import { CoursesService } from '../../services/courses.service';

//import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css'],
  imports:[[MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule]]
})
export class EditCourseComponent implements OnInit {
  editCourseForm: FormGroup;
  courseId: string='';

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private coursesService: CoursesService) {
    this.editCourseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      teacherId: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id')!;
    this.getCourseDetails(this.courseId);
  }

  getCourseDetails(id: string): void {
    this.coursesService.getCoursesById(Number(id)).subscribe(course => {
      this.editCourseForm.patchValue(course);
    });
  }

  updateCourse(): void {
    if (this.editCourseForm.valid) {
      const courseData = this.editCourseForm.value;
      this.coursesService.updateCourse(this.courseId, courseData).subscribe({
        next: response => {
          console.log('Course updated successfully!', response);
          this.router.navigate(['/home']);  // נווט לדף הבית או לדף אחר 
        },
        error: error => {
          console.error('Error updating course', error);
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
