import { Component } from '@angular/core';
import {DataComponent} from './data.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DataComponent],
  template: `
<h1>Product types</h1>
<app-data></app-data>
<app-data [product]="'Phone'"></app-data>
`,
  styles: [],
})
export class AppComponent{

}
