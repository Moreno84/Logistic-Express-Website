import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css']
})
export class CookieComponent {

constructor(private cookie: CookieService){}

ngOnInit():void{

}

cookieBox:boolean=true;


allow(){
  this.cookie.set('Cookie','Allowed', {expires:1});

    this.cookieBox=!this.cookieBox;

  console.log("Accept the cookies");
}

decline(){
  this.cookieBox=!this.cookieBox;
  console.log("Do not accept the cookies");
}

}
