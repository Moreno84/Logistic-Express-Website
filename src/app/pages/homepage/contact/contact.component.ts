import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  title:string="Contact us";
  text:string="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Mattis aliquam faucibus purus in massa tempor. Feugiat vivamus at augue eget arcu dictum varius. Massa massa ultricies mi quis hendrerit dolor.";
  image_contact:string="./assets/images/contact.png";
  
  constructor(private router: Router){}

  onclick(){
    this.router.navigate(['/getintouch']);
  }

}
