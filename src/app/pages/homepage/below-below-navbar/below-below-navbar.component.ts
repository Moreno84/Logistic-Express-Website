import { Component } from '@angular/core';

@Component({
  selector: 'app-below-below-navbar',
  templateUrl: './below-below-navbar.component.html',
  styleUrls: ['./below-below-navbar.component.css']
})
export class BelowBelowNavbarComponent {
  image_num1:string="./assets/images/imageNum1.jpg";
  image_num2:string="./assets/images/imageNum3.png";

  newImage(){
   this.image_num1 = "./assets/images/imageNum2.png";
  }

  newImage1(){
    this.image_num2 = "./assets/images/imageNum4.png";
  }
  
  oldImage(){
    this.image_num1 = "./assets/images/imageNum1.jpg";
  }

  oldImage1(){
    this.image_num2 = "./assets/images/imageNum3.png" ;
  }



}
