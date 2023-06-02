import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

title:string="Our services";
text:string="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat ut ante sed pulvinar. Duis ex purus, viverra cursus vestibulum eu, scelerisque sed ipsum. Proin orci leo, rutrum a sem eu, egestas bibendum elit. Maecenas tellus lectus, hendrerit vitae dui at, aliquet pulvinar massa. Phasellus felis nibh, venenatis ac nibh a, suscipit molestie nibh. Ut ullamcorper dolor id elit ullamcorper, et congue urna mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
services: any =[
    {
      'image': "./assets/images/img_airplane_service_air.png",
      'title':"Our air",
      'text': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet aliquam id diam maecenas."
    },
    {
      'image': "./assets/images/img_cruiseship_service_maritime.png",
      'title':"Our maritime",
      'text': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet aliquam id diam maecenas."
    },
    {
      'image': "./assets/images/img_train_service_railway.png",
      'title':"Our road",
      'text':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet aliquam id diam maecenas."
    },
    {
      'image': "./assets/images/img_bus_service_road.png",
      'title':"Our railway",
      'text':"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet aliquam id diam maecenas."  
    }
  ]

 constructor(private router: Router){}

  onClickContact(){
    this.router.navigate(['/getintouch']);
  }

}
