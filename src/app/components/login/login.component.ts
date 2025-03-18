
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
      this.router.navigate(['/sign-in']);
  }
  onRegister(){
    this.router.navigate(['/register']);
  }
 
}
