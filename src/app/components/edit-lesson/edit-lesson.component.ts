
import { Component,OnInit} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LeesonService } from '../../services/leeson.service';
@Component({
  selector: 'app-edit-lesson',
  imports:[[MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule]],
  templateUrl: './edit-lesson.component.html',
  styleUrl: './edit-lesson.component.css'
})
export class EditLessonComponent implements OnInit {
  editLessonForm: FormGroup;
  LessonId: string='';
  courseId:string='';

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private lessonService:LeesonService) {
    this.editLessonForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      courseId: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('courseId')!;
    this.LessonId = this.route.snapshot.paramMap.get('lessonId')!;
    this.getLessonsDetails(this.courseId,this.LessonId);
  }
  getLessonsDetails(courseId: string,LessonId:string): void {
    this.lessonService.getLessonById(this.courseId,this.LessonId).subscribe(lesson => {
      this.editLessonForm.patchValue(lesson);
      console.log(8787878787);
      
      console.log(lesson);
      
    });
  }
  updateLesson(): void {
    if (this.editLessonForm.valid) {
      const leesoneData = this.editLessonForm.value;
      this.lessonService.updateLesson(this.courseId,this.LessonId,leesoneData).subscribe({
        next: response => {
          console.log('lesson updated successfully!', response);
          this.router.navigate(['/home']);  // נווט לדף הבית או לדף אחר 
        },
        error: error => {
          console.error('Error updating lesson', error);
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
