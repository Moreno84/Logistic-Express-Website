import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  image_beach:string="./assets/images/beach.png";
  
  constructor(private router: Router){}

  onclick(){
    this.router.navigate(['/getintouch']);
    console.log("click");
  }

}
