import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CoursesService } from '../../services/courses.service';
@Component({
  selector: 'app-add-course',
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  AddCourseForm : FormGroup;
  constructor(private router: Router, private coursesService: CoursesService, private fb: FormBuilder) {
    console.log("AddCourseComponent");
    this.AddCourseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', [Validators.required]],
      teacherId: ['', Validators.required],
    });
    
  }
  course = { title: '', description: '', teacherId: '' };
  AddCourse() {
    console.log('add course');
  
    if (this.AddCourseForm.valid) {
      const course = {
        title: this.AddCourseForm.value.title,
        description: this.AddCourseForm.value.description,
        teacherId: this.AddCourseForm.value.teacherId
      };
      
      this.coursesService.addCourse(course).subscribe({
        next: response => {
          console.log('User AddCourse', response);
          this.router.navigate(['/home']);
        },
        error: error => {
          console.error('AddCourse error', error);
        }
      });
    } else {
      console.error('Form is invalid');
    }
    
}
}