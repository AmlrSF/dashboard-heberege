import { Component } from '@angular/core';
import { FunctionsService } from 'src/app/functions/functions.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  constructor(private functionsS:FunctionsService){}

  
  
  public addToggle(){
    this.functionsS.addToggle(); 
  }


}
