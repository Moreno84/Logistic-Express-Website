import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent {
teamWorkImage:string="./assets/images/teamwork.png";


  constructor(private router: Router){}

  onclick(){
    this.router.navigate(['/getintouch']);
  }

}
