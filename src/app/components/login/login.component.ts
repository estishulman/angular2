// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   imports: [],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {

// }




// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   imports: [],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent implements OnInit {
//   registerForm!: FormGroup ;

//   constructor(private fb: FormBuilder) {}

//   ngOnInit() {
//     this.registerForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', Validators.required]
//     });
//   }

//   onRegister() {
//     if (this.registerForm.valid) {
//       // כאן תוסיפי את הלוגיקה להרשמה
//       console.log(this.registerForm.value);
//     }
//   }
// }









import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
/**
 * @title Basic buttons
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl:  './login.component.css',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class LoginComponent {
  constructor(private router: Router) {}

  onSignIn() {
    // כאן תוכל להוסיף את הלוגיקה שלך לאימות המשתמש
    // this.router.navigate(['/home']); // מעבר לעמוד הבית
      this.router.navigate(['/sign-in']);
  }
  onRegister(){
    this.router.navigate(['/register']);
  }
 
}
