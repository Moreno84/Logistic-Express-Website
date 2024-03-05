import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router){}
  
  // Properties
  
  title:string="Logistic Express";
  logo:string="assets/images/logo.png";
  isMenuOpen:boolean=false;

  // Functions

  toogleMenu(){
    this.isMenuOpen=!this.isMenuOpen;
  }

  getintouchbutton(){
    this.router.navigate(['/getintouch']);
  }






}
