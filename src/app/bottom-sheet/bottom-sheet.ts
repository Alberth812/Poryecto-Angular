import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-bottom-sheet',
  imports: [MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './bottom-sheet.html',
  styleUrl: './bottom-sheet.css'
})
export class BottomSheet {

}
