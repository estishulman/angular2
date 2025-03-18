// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-create-lesson',
//   imports: [],
//   templateUrl: './create-lesson.component.html',
//   styleUrl: './create-lesson.component.css'
// })
// export class CreateLessonComponent {

// }

import { ChangeDetectionStrategy, Component,OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
//import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CoursesService } from '../../services/courses.service';

//import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { CoursesService } from '../../services/courses.service';
import { LeesonService } from '../../services/leeson.service';

@Component({
  selector: 'app-create-lesson',
  templateUrl: './create-lesson.component.html',
  styleUrls: ['./create-lesson.component.css'],
   imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
})
export class CreateLessonComponent implements OnInit {
  createLessonForm: FormGroup;
  courseId: string='';

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private lessonService: LeesonService) {
    this.createLessonForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      courseId: ['', Validators.required],
    });
  }

  // ngOnInit(): void {
  //   this.courseId = this.route.snapshot.paramMap.get('courseId')!;
  //   if (this.courseId) {
  //     this.createLessonForm.patchValue({ courseId: this.courseId });
  //   } else {
  //     console.error('Course ID is missing');
  //   }
  // }  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.courseId = params.get('courseId')!; // קבל את ה-courseId מה-URL
      if (this.courseId) {
        this.createLessonForm.patchValue({ courseId: this.courseId });
      } else {
        console.error('Course ID is missing');
      }
    });
   }  
 
  createLesson(): void {
    console.log(this.createLessonForm.value);
    if (this.createLessonForm.valid) {
      const lessonData = this.createLessonForm.value;
      
      this.lessonService.addLesson(this.courseId, lessonData).subscribe({
        next: response => {
          console.log('Lesson created successfully!', response);
          this.router.navigate(['/courses']);  // נווט לדף הקורס
        },
        error: error => {
          console.error('Error creating lesson', error);
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
