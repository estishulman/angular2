

import { Component,OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
