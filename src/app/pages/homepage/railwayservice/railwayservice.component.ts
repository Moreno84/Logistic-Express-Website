import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-railwayservice',
  templateUrl: './railwayservice.component.html',
  styleUrls: ['./railwayservice.component.css']
})
export class RailwayserviceComponent {
  title:string="Our service";
  subTitle:string="Railway";
  text:string="Habitant morbi tristique senectus et netus et. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Sagittis vitae et leo duis ut diam. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Pellentesque dignissim enim sit amet venenatis urna. Posuere ac ut consequat semper viverra nam libero. Amet mauris commodo quis imperdiet. Proin fermentum leo vel orci porta non pulvinar. Varius sit amet mattis vulputate enim nulla.";
  imageTrain:string="./assets/images/img_train_service_railway.png";

  constructor(private router: Router){}

  onClickRailwayServ(){
    this.router.navigate(['/service']);
  }


}
