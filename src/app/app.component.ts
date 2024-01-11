import { Component } from '@angular/core';
import { FunctionsService } from './functions/functions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = "Dashboard"
  constructor(public functionsS: FunctionsService) {}

  getContentStyles() {
    return this.functionsS.status ? {'width': 'calc(100% - 60px)', 'left': '60px'} : {};
  }
}
