import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contact } from './contact';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FormGetInTouchService {

baseUrl = 'http://localhost/Contacto/list.php';

constructor(private http:HttpClient){}


saveData(contact: contact):Observable<any>{
  return this.http.post<contact>(this.baseUrl,contact);
}



}
