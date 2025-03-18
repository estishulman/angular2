import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterServiceService } from '../../services/register-service.service'// ייבוא השירות
@Component({
  selector: 'app-register',
  imports: [MatCardModule,MatFormFieldModule,MatInputModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor(private router: Router, private registerService: RegisterServiceService, private fb: FormBuilder) {
    console.log("RegisterComponent");
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }
  user = { name: '', email: '', password: '',role:'' }; // אובייקט משתמש
  // onRegisterOk() {
  //   // !!לרשום אותו להיות משתמש

  //   // כאן תוכל להוסיף את הלוגיקה שלך לאימות המשתמש
  //   // this.router.navigate(['/home']); // מעבר לעמוד הבית
  //     this.router.navigate(['/home']);
  // }


  // onRegisterOk() {

    
  //   this.registerService.register(this.user).subscribe({

  //     next: response => {
  //       console.log("onRegisterOk111");
  //       console.log('User registered', response);
  //       this.router.navigate(['/home']);
  //     },
  //     error: error => {
  //       console.error('Registration error', error);
  //     }
  //   });
  // }
  
  onRegisterOk() {
    if (this.registerForm.valid) {
      const user = this.registerForm.value; // השתמש בנתוני הטופס
      this.registerService.register(user).subscribe({
        next: response => {
          console.log('User registered', response);
          this.router.navigate(['/home']);
        },
        error: error => {
          console.error('Registration error', error);
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
