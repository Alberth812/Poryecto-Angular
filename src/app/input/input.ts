import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatIconModule],
  templateUrl: './input.html',
  styleUrl: './input.css'
})
export class Input {

}
