import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { ReactiveFormsModule } from '@angular/forms'; 
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { SelectValueBinding } from "./components/select-value-binding/select-value-binding.component";
import { CardOverviewComponent } from "./components/card-overview/card-overview.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, ReactiveFormsModule, SelectValueBinding, CardOverviewComponent
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.navigate(['/login']);
}}
