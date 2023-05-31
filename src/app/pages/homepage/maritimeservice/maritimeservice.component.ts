import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maritimeservice',
  templateUrl: './maritimeservice.component.html',
  styleUrls: ['./maritimeservice.component.css']
})
export class MaritimeserviceComponent {
  title:string="Our service";
  subTitle:string="Maritime";
  text:string="Habitant morbi tristique senectus et netus et. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Sagittis vitae et leo duis ut diam. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Pellentesque dignissim enim sit amet venenatis urna. Posuere ac ut consequat semper viverra nam libero. Amet mauris commodo quis imperdiet. Proin fermentum leo vel orci porta non pulvinar. Varius sit amet mattis vulputate enim nulla.";
  imageMaritime:string="./assets/images/img_cruiseship_service_maritime.png";

  constructor(private router: Router){}

  onClickMaritimeServ(){
    this.router.navigate(['/service']);
  }

}
