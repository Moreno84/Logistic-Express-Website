import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router){}
  
  title= "Travelling";
  logo:string="assets/images/planeLogo.png";

  onclick(){
    this.router.navigate(['/getintouch']);
  }






}
