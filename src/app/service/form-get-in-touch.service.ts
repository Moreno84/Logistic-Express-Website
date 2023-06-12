import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contact } from './contact';






@Injectable({
  providedIn: 'root'
})
export class FormGetInTouchService {

constructor(private http:HttpClient){}

getContacts(){
  return this.http.get<contact[]>('http://localhost/Contacto/list.php');
}


}
