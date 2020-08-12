import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  postView = false;
  constructor(public router: Router){

  }
  public openRegisterForm(){
    let label = "Register;"
    this.router.navigate(['/Login', label]);
  }
}


