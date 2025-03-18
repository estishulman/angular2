import { Component } from '@angular/core';
import { CardOverviewComponent } from "../card-overview/card-overview.component";
import { Router } from '@angular/router';
import { NameComponent } from '../name/name.component';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-home',
  imports: [CardOverviewComponent,MatDividerModule,MatIconModule,MatButtonModule,NameComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name: string = 'you hear you earn';
constructor(private router:Router){
  console.log('home');
  console.log('localStorage');
  console.log(localStorage);
 // this.router.navigate(['/courses'])
}
onSCourses(){
  console.log(localStorage);
  
  this.router.navigate(['/courses'])
}
}

