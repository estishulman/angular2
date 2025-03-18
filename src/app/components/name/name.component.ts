
import { Component, Input } from '@angular/core';
import {HighlightDirective}from '../../models/highlight.directive'
@Component({
  selector: 'app-name',
  imports: [HighlightDirective],
  templateUrl: './name.component.html',
  styleUrl: './name.component.css'
})
export class NameComponent {
  @Input() name: string | undefined; // קבל שם מ-HomeComponent

  ngOnInit() {
    console.log('Received name in NameComponent:', this.name);
  }
}