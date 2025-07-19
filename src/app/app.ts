import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatAutocomplete } from './mat-autocomplete/mat-autocomplete';
import { Badge } from './badge/badge';
import { BottomSheet } from './bottom-sheet/bottom-sheet';
import { BottomToggle } from './bottom-toggle/bottom-toggle';
import { Card } from './card/card';
import { Checkbox } from './checkbox/checkbox';
import { Chips } from './chips/chips';
import { Datepicker } from './datepicker/datepicker';
import { ExpansionPanel } from './expansion-panel/expansion-panel'; 
import { FormField } from './form-field/form-field';  
import { GridList } from './grid-list/grid-list'; 
import { Icon } from './icon/icon';
import { Input } from './input/input';
import { List } from './list/list';
import { Menu } from './menu/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
            MatAutocomplete, 
            Badge,
            BottomSheet, 
            BottomToggle, 
            Card, 
            Checkbox, 
            Chips, 
            Datepicker,
            ExpansionPanel,
            FormField,
            GridList,
            Icon,
            Input,
            List,
            Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projectmaterial');
}
