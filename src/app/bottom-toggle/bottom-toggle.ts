import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-bottom-toggle',
  imports: [MatButtonToggleModule, MatCheckboxModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './bottom-toggle.html',
  styleUrl: './bottom-toggle.css'
})
export class BottomToggle {
  hideSingleSelectionIndicator = signal(false);
  hideMultipleSelectionIndicator = signal(false);

  toggleSingleSelectionIndicator() {
    this.hideSingleSelectionIndicator.update(value => !value);
  }

  toggleMultipleSelectionIndicator() {
    this.hideMultipleSelectionIndicator.update(value => !value);
  }

}
