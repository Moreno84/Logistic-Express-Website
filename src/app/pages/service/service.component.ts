import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {


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

}
