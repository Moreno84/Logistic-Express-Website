import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roadservice',
  templateUrl: './roadservice.component.html',
  styleUrls: ['./roadservice.component.css']
})
export class RoadserviceComponent {
  title:string="Our service";
  subTitle:string="Road";
  text:string="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae justo eget magna fermentum iaculis eu. Enim sit amet venenatis urna cursus eget nunc. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Ut venenatis tellus in metus vulputate. Penatibus et magnis dis parturient montes nascetur ridiculus.";
  imageBus:string="./assets/images/img_bus_service_road.png";

  constructor(private router: Router){}

  onClickRoadServ(){
    this.router.navigate(['/service']);
  }
}
