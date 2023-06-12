import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

 services = [
  {
    'name': 'Air'

  },
  {
    'name': 'Maritime'

  },
  {
    'name': 'Railway'

  },
  {
    'name': 'Road'

  },
 ] 

 abouts = [
  {
    'name': 'Our story'
  },
  {
    'name': 'Career'
  }
 ]

constructor(private router: Router){}

onAboutUs(){
  this.router.navigate(['/about']);
 
}

 onGetInTouch(){
  this.router.navigate(['/getintouch']);
 }
}
