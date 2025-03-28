
import {Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

/** @title Select with 2-way value binding */
@Component({
  selector: 'select-value-binding',
  templateUrl: './select-value-binding.component.html',
  styleUrl: './select-value-binding.component.css',
  imports: [MatFormFieldModule, MatSelectModule],
})
export class SelectValueBinding {
  selected = 'option2';
}
