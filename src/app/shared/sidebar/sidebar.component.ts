import { Component } from '@angular/core';
import { FunctionsService } from 'src/app/functions/functions.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(public functionsS:FunctionsService){}

}
