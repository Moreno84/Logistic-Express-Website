import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

  imagePlane:string="./assets/images/img_airplane_service_air.png";
  imageMaritime:string="./assets/images/img_cruiseship_service_maritime.png";
  imageBus:string="./assets/images/img_bus_service_road.png";
  imageTrain:string="./assets/images/img_train_service_railway.png";

}
