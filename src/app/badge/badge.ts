import {Component} from '@angular/core';
import {ProgressBarMode, MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-badge',
  imports: [MatProgressBarModule, MatSliderModule, FormsModule, MatRadioModule, MatCardModule],
  templateUrl: './badge.html',
  styleUrl: './badge.css'
})
export class Badge {
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;
}
