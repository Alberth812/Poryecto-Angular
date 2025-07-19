import {LiveAnnouncer} from '@angular/cdk/a11y';
import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-chips',
  imports: [FormsModule, MatButtonModule, MatChipsModule, MatFormFieldModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chips.html',
  styleUrl: './chips.css'
})
export class Chips {
  readonly templateKeywords = signal(['angular', 'how-to', 'tutorial', 'accessibility']);

  announcer = inject(LiveAnnouncer);

  removeTemplateKeyword(keyword: string) {
    this.templateKeywords.update(keywords => {
      const index = keywords.indexOf(keyword);
      if (index < 0) {
        return keywords;
      }

      keywords.splice(index, 1);
      this.announcer.announce(`removed ${keyword} from template form`);
      return [...keywords];
    });
  }

  addTemplateKeyword(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our keyword
    if (value) {
      this.templateKeywords.update(keywords => [...keywords, value]);
      this.announcer.announce(`added ${value} to template form`);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

}
