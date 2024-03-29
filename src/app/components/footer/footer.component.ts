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
    'ourStory': 'Our story'
  },
  {
    'career': 'Career'
  }
 ]

 contacts =[
  {
    'contact': 'Get in touch'
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
