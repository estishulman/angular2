import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterServiceService } from '../../services/register-service.service'// ייבוא השירות
import { SignInServiceService } from '../../services/sign-in-service.service';

@Component({
  selector: 'app-sign-in',
  imports: [MatCardModule,MatFormFieldModule,MatInputModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {
  signInForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,private signInService:SignInServiceService) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }



  
  onSignInOk() {
    
    // this.router.navigate(['/home']); // מעבר לעמוד הבית
    if (this.signInForm.valid||true) {
      const user =this.signInForm.value
      this.signInService.signIn(user).subscribe({
        next:Response=>{
          console.log('user sign in');
          this.router.navigate(['/home']);
        },error:error => {
          alert('sign in error')
          console.error('sign in error', error);
        }
        
      });
      // כאן תוכל להוסיף את הלוגיקה שלך לאימות המשתמש
    } else {
      // הצג הודעת שגיאה או טיפול בשגיאות
      console.error('Form is invalid');
    }
  }
}

